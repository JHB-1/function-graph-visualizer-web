export interface Ast extends Array<string | number | Ast> { 0: string }

// 제한 문법을 AST로 변환, 사용자 JavaScript 실행 경로 없음
export function parse_expression(source: string, dimensions: number): Ast
{
	if (source.length > 4096)
		throw new Error("수식은 4096자 이내로 입력하세요.");

	const tokens: string[] = source.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[A-Za-z_][A-Za-z_0-9]*|\*\*|[+\-*/^(),]|\S/gi) ?? [];
	let index: number = 0;
	let nodes: number = 0;
	const unary: Set<string> = new Set(["sin", "cos", "tan", "exp", "log", "sqrt", "abs"]);
	const binary: Set<string> = new Set(["min", "max", "pow"]);
	const operations: Record<string, string> = { "+": "add", "-": "sub", "*": "mul", "/": "div", "^": "pow", "**": "pow" };
	function node(operation: string, ...children: Array<number | Ast>): Ast
	{
		if (++nodes > 512)
			throw new Error("수식 AST 한도는 512개입니다.");

		return [operation, ...children];
	}
	function parse(minimum: number, depth: number): Ast
	{
		if (depth > 64)
			throw new Error("수식 중첩은 64단계 이내로 입력하세요.");

		const token: string | undefined = tokens[index++];
		let left: Ast;
		if (token === "+" || token === "-")
			left = node(token === "+" ? "pos" : "neg", parse(3, depth + 1));
		else if (token === "(")
		{
			left = parse(0, depth + 1);
			if (tokens[index++] !== ")")
				throw new Error("닫는 괄호가 필요합니다.");
		}
		else if (token !== undefined && /^(?:\d|\.)/.test(token) && Number.isFinite(Number(token)))
			left = node("number", Number(token));
		else if (token === "pi" || token === "e")
			left = node("number", token === "pi" ? Math.PI : Math.E);
		else if (token !== undefined && (unary.has(token) || binary.has(token)))
		{
			if (tokens[index++] !== "(")
				throw new Error(`${token} 뒤에는 괄호가 필요합니다.`);

			const first: Ast = parse(0, depth + 1);
			if (binary.has(token))
			{
				if (tokens[index++] !== ",")
					throw new Error(`${token}에는 인자 두 개가 필요합니다.`);

				left = node(token, first, parse(0, depth + 1));
			}
			else
				left = node(token, first);

			if (tokens[index++] !== ")")
				throw new Error("닫는 괄호가 필요합니다.");
		}
		else
		{
			const variable: number = token === "x" ? 0 : token === "y" ? 1 : token === "z" ? 2 :
				/^x\d+$/.test(token ?? "") ? Number(token!.slice(1)) : -1;
			if (variable < 0 || variable >= dimensions)
				throw new Error(`지원하지 않는 변수/토큰: ${token ?? "입력 끝"}`);

			left = node("variable", variable);
		}

		while (index < tokens.length)
		{
			const operator: string = tokens[index]!;
			const precedence: number = operator === "+" || operator === "-" ? 1 :
				operator === "*" || operator === "/" ? 2 : operator === "^" || operator === "**" ? 4 : -1;
			if (precedence < minimum)
				break;

			++index;
			const operation: string = operations[operator]!;
			left = node(operation, left, parse(precedence + (precedence === 4 ? 0 : 1), depth + 1));
		}

		return left;
	}
	const result: Ast = parse(0, 0);
	if (index !== tokens.length)
		throw new Error(`예상하지 못한 토큰: ${tokens[index]}`);

	return result;
}
