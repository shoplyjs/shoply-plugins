import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import {
    DEFAULT_AUTH_TOKEN_HEADER_KEY,
    DEFAULT_CHANNEL_TOKEN_KEY,
} from '@shoplyjs/common/dist/shared-constants';
import {
    AdminUiAppConfig,
    AdminUiAppDevModeConfig,
    AdminUiConfig,
    Type,
} from '@shoplyjs/common/dist/shared-types';
import { ConfigService, createProxyHandler, Logger, PluginCommonModule, VendurePlugin } from '@shoplyjs/core';

import { adminApiExtensions } from './api/api-extensions';
import { MetricsResolver } from './api/metrics.resolver';
import { MetricsService } from './service/metrics.service';

/**
 * @description
 * Configuration options for the {@link MetricsPlugin}.
 *
 * @docsCategory core plugins/AdminUiPlugin
 */
export interface AdminUiPluginOptions {}

/**
 * @description
 * This plugin starts a static server for the Admin UI app, and proxies it via the `/admin/` path of the main Vendure server.
 *
 * The Admin UI allows you to administer all aspects of your store, from inventory management to order tracking. It is the tool used by
 * store administrators on a day-to-day basis for the management of the store.
 *
 * ## Installation
 *
 * `yarn add \@vendure/admin-ui-plugin`
 *
 * or
 *
 * `npm install \@vendure/admin-ui-plugin`
 *
 * @example
 * ```ts
 * import { AdminUiPlugin } from '\@vendure/admin-ui-plugin';
 *
 * const config: VendureConfig = {
 *   // Add an instance of the plugin to the plugins array
 *   plugins: [
 *     AdminUiPlugin.init({ port: 3002 }),
 *   ],
 * };
 * ```
 *
 * ## Metrics
 *
 * This plugin also defines a `metricSummary` query which is used by the Admin UI to display the order metrics on the dashboard.
 *
 * If you are building a stand-alone version of the Admin UI app, and therefore don't need this plugin to server the Admin UI,
 * you can still use the `metricSummary` query by adding the `AdminUiPlugin` to the `plugins` array, but without calling the `init()` method:
 *
 * @example
 * ```ts
 * import { AdminUiPlugin } from '\@vendure/admin-ui-plugin';
 *
 * const config: VendureConfig = {
 *   plugins: [
 *     AdminUiPlugin, // <-- no call to .init()
 *   ],
 *   // ...
 * };
 * ```
 *
 * @docsCategory core plugins/AdminUiPlugin
 */
@VendurePlugin({
    imports: [PluginCommonModule],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [MetricsResolver],
    },
    providers: [MetricsService],
    compatibility: '^2.0.0',
})
export class MetricsPlugin {
    static options: any;

    static init(options: any) {
        Logger.info(`Initializing ${MetricsPlugin.name} plugin`);

        this.options = options;
        return MetricsPlugin;
    }
}
