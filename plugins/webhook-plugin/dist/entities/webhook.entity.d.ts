import { DeepPartial, VendureEntity } from '@shoplyjs/core';
import { ID } from '@shoplyjs/common/dist/shared-types';
export declare class Webhook extends VendureEntity {
    constructor(input?: DeepPartial<Webhook>);
    channelId: ID;
    event: string;
    eventId: string;
    clientType: string;
    url: string;
    method: string;
    headers: Record<string, string>;
    setEventId(): void;
}
//# sourceMappingURL=webhook.entity.d.ts.map