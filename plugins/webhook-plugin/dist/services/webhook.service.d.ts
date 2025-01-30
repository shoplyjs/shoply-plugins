import { OnApplicationBootstrap } from '@nestjs/common';
import { RequestContext, TransactionalConnection } from '@shoplyjs/core';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Webhook } from '../entities/webhook.entity';
import { CreateWebhookDto } from '../dto/create-webhook.dto';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';
export declare class WebhookService implements OnApplicationBootstrap {
    private connection;
    private eventHandler;
    constructor(connection: TransactionalConnection, eventEmitter: EventEmitter2);
    onApplicationBootstrap(): Promise<void>;
    findAll(): Promise<Webhook[]>;
    findOne(ctx: RequestContext, id: string): Promise<Webhook | null>;
    create(ctx: RequestContext, input: CreateWebhookDto): Promise<Webhook>;
    update(ctx: RequestContext, input: UpdateWebhookDto, id: string): Promise<Webhook>;
    delete(ctx: RequestContext, id: string): Promise<void>;
}
//# sourceMappingURL=webhook.service.d.ts.map