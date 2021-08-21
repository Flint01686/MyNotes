export interface Note{
    readonly id?: number;
    readonly tags?: Array<string>;
    readonly text: string;

    readonly attachments?: Array<string>;
    readonly isPinned: boolean;
}
