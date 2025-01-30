"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApiExtensions = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.adminApiExtensions = (0, graphql_tag_1.default) `
    type Webhook implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        event: String!
        url: String!
        method: String!
        clientType: String
        headers: [String]
    }

    extend type Query {
        webhooks: [Webhook!]!
        webhook(id: ID!): Webhook
    }

    extend type Mutation {
        createWebhook(input: CreateWebhookInput!): Webhook!
        updateWebhook(input: UpdateWebhookInput!): Webhook!
        deleteWebhook(id: ID!): DeletionResponse!
    }

    input CreateWebhookInput {
        event: String!
        url: String!
        method: String!
        clientType: String
        headers: [String]
    }

    input UpdateWebhookInput {
        id: ID!
        event: String
        url: String
        method: String
        clientType: String
        headers: [String]
    }
`;
//# sourceMappingURL=api-extension.js.map