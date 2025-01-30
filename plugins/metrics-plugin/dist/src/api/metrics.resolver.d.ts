import { RequestContext } from '@shoplyjs/core';
import { MetricsService } from '../service/metrics.service';
import { MetricSummary, MetricSummaryInput } from '../types';
export declare class MetricsResolver {
    private service;
    constructor(service: MetricsService);
    metricSummary(ctx: RequestContext, input: MetricSummaryInput): Promise<MetricSummary[]>;
}
