import type { DocumentValue, RecoveryRecord } from "./document";
import type { ObjectValue } from "./engine/client";

export type WorkspaceEvent =
	{ type: "document"; document: DocumentValue } |
	{ type: "theme"; dark: boolean } |
	{ type: "notice"; text: string; error?: boolean } |
	{ type: "teardown" };

export interface WorkspaceHost
{
	initial_document: DocumentValue;
	storage_namespace: string;
	recovery_note?: string;
	drafts?:
	{
		read(): Promise<unknown>;
		store(value: RecoveryRecord | undefined, all: boolean): Promise<void>;
		get_enabled(): Promise<boolean>;
		set_enabled(enabled: boolean): Promise<void>;
	};
	dark: boolean;
	request(input: ObjectValue, preview: boolean): Promise<ObjectValue>;
	download(name: string, contents: Blob): Promise<void>;
	confirm?(message: string): Promise<boolean>;
	subscribe(listener: (event: WorkspaceEvent) => void): void;
	actions: Array<{ id: string; label: string; run: () => Promise<void> }>;
	info(): ObjectValue;
	dispose(): void;
}

let host: WorkspaceHost | undefined;

export function set_workspace_host(value: WorkspaceHost): void
{
	if (host)
		throw new Error("Workspace host is already configured");

	host = value;
}

export function get_workspace_host(): WorkspaceHost | undefined
{
	return host;
}

export function storage_key(name: string): string
{
	return host ? `${host.storage_namespace}:${name}` : `fgv-${name}`;
}
