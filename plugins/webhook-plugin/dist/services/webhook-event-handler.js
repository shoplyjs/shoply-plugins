"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEventHandler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const core_1 = require("@shoplyjs/core");
class WebhookEventHandler {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.eventHandlers = new Map();
    }
    subscribeWebhookEvent(webhook) {
        const eventHandler = (data) => {
            this.proceedWebhook(webhook, data).catch(err => err);
        };
        this.eventEmitter.on(webhook.event, eventHandler);
        this.eventHandlers.set(`${webhook.event}:${webhook.id}`, eventHandler);
    }
    unsubscribeWebhookEvent(eventType, webhookId) {
        const eventHandler = this.eventHandlers.get(`${eventType}:${webhookId}`);
        if (eventHandler) {
            this.eventEmitter.removeListener(eventType, eventHandler);
            this.eventHandlers.delete(`${eventType}:${webhookId}`);
            core_1.Logger.info(`Unsubscribed from event: ${eventType} for webhook ID: ${webhookId}`);
        }
        else {
            core_1.Logger.warn(`No event handler found for event: ${eventType} and webhook ID: ${webhookId}`);
        }
    }
    async proceedWebhook(currentWebhook, data) {
        if (String(data.ctx.channelId) !== String(currentWebhook.channelId))
            return;
        if (currentWebhook.clientType === 'rest') {
            await this.callRestWebhook(currentWebhook, data);
        }
    }
    async callRestWebhook(webhook, data) {
        const _a = data || {}, { ctx } = _a, rest = __rest(_a, ["ctx"]);
        try {
            const payload = JSON.stringify({ data: rest || {} });
            const response = await (0, node_fetch_1.default)(webhook.url, {
                method: webhook.method,
                headers: webhook.headers,
                body: payload,
            });
            if (!response.ok) {
                throw new Error(`HTTP Request failed with status: ${response.status}`);
            }
            core_1.Logger.info(`Webhook triggered for ${webhook.event} at ${webhook.url}`, WebhookEventHandler.name);
        }
        catch (e) {
            core_1.Logger.warn(`Failed to trigger webhook for ${webhook.event} at ${webhook.url}: ${e.message}`, WebhookEventHandler.name);
        }
    }
}
exports.WebhookEventHandler = WebhookEventHandler;
//# sourceMappingURL=webhook-event-handler.js.map