"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWebhookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_webhook_dto_1 = require("./create-webhook.dto");
class UpdateWebhookDto extends (0, swagger_1.PartialType)(create_webhook_dto_1.CreateWebhookDto) {
}
exports.UpdateWebhookDto = UpdateWebhookDto;
//# sourceMappingURL=update-webhook.dto.js.map