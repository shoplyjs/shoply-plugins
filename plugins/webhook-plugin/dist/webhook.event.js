"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEvent = void 0;
const core_1 = require("@shoplyjs/core");
/**
 * @description
 * This event is fired whenever a {@link Webhook} is created, updated
 * or deleted.
 *
 * @docsCategory events
 * @docsPage Event Types
 * @since 2.3.0
 */
class WebhookEvent extends core_1.VendureEvent {
    constructor(ctx, webhook, type) {
        super();
        this.ctx = ctx;
        this.webhook = webhook;
        this.type = type;
    }
}
exports.WebhookEvent = WebhookEvent;
//# sourceMappingURL=webhook.event.js.map