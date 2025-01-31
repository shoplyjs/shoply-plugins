"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@shoplyjs/core");
const core_2 = require("@shoplyjs/core");
const event_emitter_1 = require("@nestjs/event-emitter");
const webhook_entity_1 = require("../entities/webhook.entity");
const webhook_event_handler_1 = require("./webhook-event-handler");
let WebhookService = class WebhookService {
    constructor(connection, eventEmitter) {
        this.connection = connection;
        this.eventHandler = new webhook_event_handler_1.WebhookEventHandler(eventEmitter);
    }
    async onApplicationBootstrap() {
        const webhooks = await this.findAll();
        for (const webhook of webhooks) {
            this.eventHandler.subscribeWebhookEvent(webhook);
        }
    }
    async findAll() {
        return this.connection.rawConnection.getRepository(webhook_entity_1.Webhook).find();
    }
    async findOne(ctx, id) {
        const webhook = await this.connection.getRepository(ctx, webhook_entity_1.Webhook).findOne({ where: { id } });
        if (!webhook) {
            throw new core_1.EntityNotFoundError('Webhook', id);
        }
        return webhook;
    }
    async create(ctx, input) {
        const webhook = await this.connection.getRepository(ctx, webhook_entity_1.Webhook).save(Object.assign({ channelId: ctx.channelId }, input));
        this.eventHandler.subscribeWebhookEvent(webhook);
        return webhook;
    }
    async update(ctx, input, id) {
        const repository = this.connection.getRepository(ctx, webhook_entity_1.Webhook);
        const existingEntity = await repository.preload(Object.assign(Object.assign({ id: +id }, input), { channelId: ctx.channelId }));
        if (!existingEntity) {
            throw new core_1.EntityNotFoundError('Webhook', id);
        }
        const updatedEntity = await repository.save(existingEntity);
        if (existingEntity.event !== input.event) {
            this.eventHandler.unsubscribeWebhookEvent(existingEntity.event, String(existingEntity.id));
            this.eventHandler.subscribeWebhookEvent(updatedEntity);
        }
        return updatedEntity;
    }
    async delete(ctx, id) {
        const webhook = await this.findOne(ctx, id);
        if (!webhook) {
            throw new core_1.EntityNotFoundError('Webhook', id);
        }
        await this.connection.getRepository(ctx, webhook_entity_1.Webhook).delete({ id });
        this.eventHandler.unsubscribeWebhookEvent(webhook.event, String(webhook.id));
    }
};
exports.WebhookService = WebhookService;
exports.WebhookService = WebhookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_2.TransactionalConnection, typeof (_a = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _a : Object])
], WebhookService);
//# sourceMappingURL=webhook.service.js.map