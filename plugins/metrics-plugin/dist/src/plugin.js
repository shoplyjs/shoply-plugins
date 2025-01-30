"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MetricsPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsPlugin = void 0;
const core_1 = require("@shoplyjs/core");
const api_extensions_1 = require("./api/api-extensions");
const metrics_resolver_1 = require("./api/metrics.resolver");
const metrics_service_1 = require("./service/metrics.service");
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
let MetricsPlugin = MetricsPlugin_1 = class MetricsPlugin {
    static init(options) {
        core_1.Logger.info(`Initializing ${MetricsPlugin_1.name} plugin`);
        this.options = options;
        return MetricsPlugin_1;
    }
};
exports.MetricsPlugin = MetricsPlugin;
exports.MetricsPlugin = MetricsPlugin = MetricsPlugin_1 = __decorate([
    (0, core_1.VendurePlugin)({
        imports: [core_1.PluginCommonModule],
        adminApiExtensions: {
            schema: api_extensions_1.adminApiExtensions,
            resolvers: [metrics_resolver_1.MetricsResolver],
        },
        providers: [metrics_service_1.MetricsService],
        compatibility: '^2.0.0',
    })
], MetricsPlugin);
//# sourceMappingURL=plugin.js.map