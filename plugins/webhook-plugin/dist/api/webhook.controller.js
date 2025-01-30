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
exports.WebhookController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@shoplyjs/core");
const webhook_service_1 = require("../services/webhook.service");
const swagger_1 = require("@nestjs/swagger");
const create_webhook_dto_1 = require("../dto/create-webhook.dto");
const update_webhook_dto_1 = require("../dto/update-webhook.dto");
let WebhookController = class WebhookController {
    constructor(webhookService) {
        this.webhookService = webhookService;
    }
    getWebhooks(ctx) {
        return this.webhookService.findAll();
    }
    getWebhook(id, ctx) {
        return this.webhookService.findOne(ctx, id);
    }
    createWebhook(body, ctx) {
        return this.webhookService.create(ctx, body);
    }
    updateWebhook(id, body, ctx) {
        return this.webhookService.update(ctx, body, id);
    }
    deleteWebhook(id, ctx) {
        return this.webhookService.delete(ctx, id);
    }
};
exports.WebhookController = WebhookController;
__decorate([
    (0, common_1.Get)(),
    (0, core_1.Allow)(core_1.Permission.ReadAdministrator),
    __param(0, (0, core_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext]),
    __metadata("design:returntype", void 0)
], WebhookController.prototype, "getWebhooks", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, core_1.Allow)(core_1.Permission.ReadAdministrator),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, core_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, core_1.RequestContext]),
    __metadata("design:returntype", void 0)
], WebhookController.prototype, "getWebhook", null);
__decorate([
    (0, common_1.Post)(),
    (0, core_1.Allow)(core_1.Permission.CreateAdministrator),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, core_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_webhook_dto_1.CreateWebhookDto, core_1.RequestContext]),
    __metadata("design:returntype", void 0)
], WebhookController.prototype, "createWebhook", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, core_1.Allow)(core_1.Permission.UpdateAdministrator),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, core_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_webhook_dto_1.UpdateWebhookDto, core_1.RequestContext]),
    __metadata("design:returntype", void 0)
], WebhookController.prototype, "updateWebhook", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, core_1.Allow)(core_1.Permission.DeleteAdministrator),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, core_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, core_1.RequestContext]),
    __metadata("design:returntype", void 0)
], WebhookController.prototype, "deleteWebhook", null);
exports.WebhookController = WebhookController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiHeader)({
        name: 'vendure-token',
        example: 'h9o71qyipeqr404nka2',
        description: 'Authentication token required for login',
        required: true,
    }),
    (0, common_1.Controller)('webhooks'),
    __metadata("design:paramtypes", [webhook_service_1.WebhookService])
], WebhookController);
//# sourceMappingURL=webhook.controller.js.map