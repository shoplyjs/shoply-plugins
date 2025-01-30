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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWebhookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const common_1 = require("@shoplyjs/common");
class CreateWebhookDto {
}
exports.CreateWebhookDto = CreateWebhookDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The event type that triggers the webhook.',
        example: 'product.created',
        enum: Object.values(common_1.EventNames),
    }),
    (0, class_validator_1.IsEnum)(Object.values(common_1.EventNames), {
        message: 'event must be one of ProductEvent, OrderEvent, CustomerEvent',
    }),
    (0, class_validator_1.IsString)({ message: 'event must be a string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'event must be less than 255 characters' }),
    __metadata("design:type", String)
], CreateWebhookDto.prototype, "event", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The URL to which the webhook will send requests.',
        example: 'https://example.com/webhook',
    }),
    (0, class_validator_1.IsUrl)({}, { message: 'url must be a valid URL' }),
    (0, class_validator_1.MaxLength)(2000, { message: 'url must be less than 2000 characters' }),
    __metadata("design:type", String)
], CreateWebhookDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 'POST',
        example: 'POST',
        enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'],
        description: 'The HTTP method used to send the webhook request.',
    }),
    (0, class_validator_1.IsEnum)(['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'], {
        message: 'method must be one of GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT, TRACE',
    }),
    (0, class_validator_1.MaxLength)(10, { message: 'method must be less than 10 characters' }),
    __metadata("design:type", String)
], CreateWebhookDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        example: { 'Content-Type': 'application/json', Authorization: 'Bearer 123' },
        description: 'Custom headers to include in the webhook request.',
        properties: {},
    }),
    (0, class_validator_1.IsObject)({ message: 'headers must be a valid object' }),
    (0, class_validator_1.Max)(20, { message: 'headers must be less than 10 items' }),
    __metadata("design:type", Object)
], CreateWebhookDto.prototype, "headers", void 0);
//# sourceMappingURL=create-webhook.dto.js.map