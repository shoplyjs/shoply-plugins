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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@shoplyjs/core");
const webhook_service_1 = require("../services/webhook.service");
let WebhookResolver = class WebhookResolver {
    constructor(webhookService) {
        this.webhookService = webhookService;
    }
    webhooks(ctx) {
        return this.webhookService.findAll();
    }
    webhook(ctx, args) {
        return this.webhookService.findOne(ctx, args.id);
    }
    async createWebhook(ctx, args) {
        const webhook = await this.webhookService.create(ctx, args.input);
        return webhook;
    }
    async updateWebhook(ctx, args) {
        const webhook = await this.webhookService.update(ctx, args.input, String(args.id));
        return webhook;
    }
    async deleteWebhook(ctx, args) {
        return this.webhookService.delete(ctx, String(args.id));
    }
};
exports.WebhookResolver = WebhookResolver;
__decorate([
    (0, graphql_1.Query)(),
    (0, core_1.Allow)(core_1.Permission.ReadAdministrator),
    __param(0, (0, core_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext]),
    __metadata("design:returntype", Promise)
], WebhookResolver.prototype, "webhooks", null);
__decorate([
    (0, graphql_1.Query)(),
    (0, core_1.Allow)(core_1.Permission.ReadAdministrator),
    __param(0, (0, core_1.Ctx)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], WebhookResolver.prototype, "webhook", null);
__decorate([
    (0, core_1.Transaction)(),
    (0, graphql_1.Mutation)(),
    (0, core_1.Allow)(core_1.Permission.CreateAdministrator),
    __param(0, (0, core_1.Ctx)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], WebhookResolver.prototype, "createWebhook", null);
__decorate([
    (0, core_1.Transaction)(),
    (0, graphql_1.Mutation)(),
    (0, core_1.Allow)(core_1.Permission.UpdateAdministrator),
    __param(0, (0, core_1.Ctx)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], WebhookResolver.prototype, "updateWebhook", null);
__decorate([
    (0, core_1.Transaction)(),
    (0, graphql_1.Mutation)(),
    (0, core_1.Allow)(core_1.Permission.DeleteAdministrator),
    __param(0, (0, core_1.Ctx)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], WebhookResolver.prototype, "deleteWebhook", null);
exports.WebhookResolver = WebhookResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [webhook_service_1.WebhookService])
], WebhookResolver);
//# sourceMappingURL=webhook.resolver.js.map