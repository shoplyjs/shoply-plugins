export type MetricSummary = {
    interval: MetricInterval;
    type: MetricType;
    title: string;
    entries: MetricSummaryEntry[];
};
export declare enum MetricType {
    OrderCount = "OrderCount",
    OrderTotal = "OrderTotal",
    AverageOrderValue = "AverageOrderValue"
}
export declare enum MetricInterval {
    Daily = "Daily"
}
export type MetricSummaryEntry = {
    label: string;
    value: number;
};
export interface MetricSummaryInput {
    interval: MetricInterval;
    types: MetricType[];
    refresh?: boolean;
}
