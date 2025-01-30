import { RequestContext } from '@shoplyjs/core';
import { WebhookService } from '../services/webhook.service';
import { CreateWebhookDto } from '../dto/create-webhook.dto';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';
export declare class WebhookController {
    private webhookService;
    constructor(webhookService: WebhookService);
    getWebhooks(ctx: RequestContext): Promise<import("entities/webhook.entity").Webhook[]>;
    getWebhook(id: string, ctx: RequestContext): Promise<import("entities/webhook.entity").Webhook | null>;
    createWebhook(body: CreateWebhookDto, ctx: RequestContext): Promise<import("entities/webhook.entity").Webhook>;
    updateWebhook(id: string, body: UpdateWebhookDto, ctx: RequestContext): Promise<import("entities/webhook.entity").Webhook>;
    deleteWebhook(id: string, ctx: RequestContext): Promise<void>;
}
//# sourceMappingURL=webhook.controller.d.ts.map