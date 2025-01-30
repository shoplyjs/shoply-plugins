import { PluginCommonModule, Type, VendurePlugin } from '@shoplyjs/core';

import { TEMPLATE_PLUGIN_OPTIONS } from './constants.template';
import { PluginInitOptions } from './types.template';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: TEMPLATE_PLUGIN_OPTIONS, useFactory: () => TemplatePlugin.options }],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^2.0.0',
})
export class TemplatePlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<TemplatePlugin> {
        this.options = options;
        return TemplatePlugin;
    }
}
