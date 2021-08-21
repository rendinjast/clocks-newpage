export type ClockRotate = [number, number];

type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };

export type BlockType = Tuple<ClockRotate, 24 | 12>;
