"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WebhookPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookPlugin = void 0;
const core_1 = require("@shoplyjs/core");
const api_extension_1 = require("./api/api-extension");
const webhook_controller_1 = require("./api/webhook.controller");
const webhook_resolver_1 = require("./api/webhook.resolver");
const webhook_entity_1 = require("./entities/webhook.entity");
const webhook_service_1 = require("./services/webhook.service");
let WebhookPlugin = WebhookPlugin_1 = class WebhookPlugin {
    static init(options) {
        core_1.Logger.info(`Initializing ${WebhookPlugin_1.name} plugin`);
        this.options = options;
        return WebhookPlugin_1;
    }
};
exports.WebhookPlugin = WebhookPlugin;
exports.WebhookPlugin = WebhookPlugin = WebhookPlugin_1 = __decorate([
    (0, core_1.VendurePlugin)({
        imports: [core_1.PluginCommonModule],
        providers: [webhook_service_1.WebhookService],
        controllers: [webhook_controller_1.WebhookController],
        entities: [webhook_entity_1.Webhook],
        adminApiExtensions: {
            schema: api_extension_1.adminApiExtensions,
            resolvers: [webhook_resolver_1.WebhookResolver],
        },
        compatibility: '^2.0.0',
    })
], WebhookPlugin);
//# sourceMappingURL=webhook.plugin.js.map