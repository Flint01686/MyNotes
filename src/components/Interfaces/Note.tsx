export interface Note{
    readonly img?: string;
    readonly tags?: Array<string>;
    readonly text: string;

    readonly attachment?: string;
}
