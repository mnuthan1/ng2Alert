
export class Alert {
    type: AlertType;
    message: string;
    ttl = 0;
    position: PositionType;
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}

export enum PositionType {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTOM_RIGHT,
    DEFAULT
}
