/** 같은 축의 서로 다른 눈금이 겹칠 때만 기존 유효 자릿수 증가 */
export function format_tick_labels(values: readonly number[]): string[]
{
	let labels: string[] = [];
	for (let precision: number = 3; precision <= 17; precision++)
	{
		labels = values.map((value: number): string => Number(value.toPrecision(precision)).toString());
		const owners: Map<string, number> = new Map();
		let has_collision: boolean = false;
		for (const [index, text] of labels.entries())
		{
			const value: number = values[index]!;
			if (owners.has(text) && owners.get(text) !== value)
			{
				has_collision = true;
				break;
			}

			owners.set(text, value);
		}

		if (!has_collision) return labels;
	}

	return labels;
}
