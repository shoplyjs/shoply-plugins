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
exports.Webhook = void 0;
const core_1 = require("@shoplyjs/core");
const typeorm_1 = require("typeorm");
let Webhook = class Webhook extends core_1.VendureEntity {
    constructor(input) {
        super(input);
    }
    setEventId() {
        this.eventId = `${this.event}:${this.id || 'new'}`; // Use 'new' as a placeholder if `id` is not yet set
    }
};
exports.Webhook = Webhook;
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", Object)
], Webhook.prototype, "channelId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Webhook.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Webhook.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: ['rest', 'graphql'], default: 'rest' }),
    __metadata("design:type", String)
], Webhook.prototype, "clientType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Webhook.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'POST' }),
    __metadata("design:type", String)
], Webhook.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-json' }),
    __metadata("design:type", Object)
], Webhook.prototype, "headers", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Webhook.prototype, "setEventId", null);
exports.Webhook = Webhook = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Webhook);
//# sourceMappingURL=webhook.entity.js.map