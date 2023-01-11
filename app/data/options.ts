import { TablerIconsType } from "@encode42/tabler-icons-types";

export type AvailableTypes = "TextInput" | "Select" | "Slider" | "Checkbox" | "Flags";

export type AvailableConfig = keyof typeof config;
export type AvailableFlags = keyof typeof flags;
export type AvailableExtraFlags = keyof typeof extraFlags;

export type AvailableOperatingSystem = keyof typeof environment.operatingSystem;
export type AvailableServerType = keyof typeof environment.serverType;

type SharedSupported = {
    [key in keyof Environment]: AvailableConfig[];
};

type SharedFlags = {
    [key: string]: (AvailableFlags | AvailableExtraFlags)[]
}

interface EnvironmentOptions<OptionType = EnvironmentOption> {
    [key: string]: OptionType
}

interface EnvironmentOption {
    "label": string,
    "icon": TablerIconsType,
    "config": AvailableConfig[]
}

interface ServerTypeOption extends EnvironmentOption {
    "flags": AvailableFlags[],
    "extraFlags"?: AvailableExtraFlags[]
}

export interface ConfigType {
    "component": AvailableTypes,
    "icon"?: TablerIconsType,
    "props"?: any
}

type Environment = {
    "operatingSystem": EnvironmentOptions,
    "serverType": EnvironmentOptions<ServerTypeOption>
}

interface Config {
    [key: string]: {
        "label": string,
        "description"?: string,
        "isAdvanced"?: boolean,
        "row": number,
        "type": ConfigType
    }
}

interface FlagOption {
    "label": string,
    "description"?: string
}

interface FlagExtraOption extends FlagOption {
    "supports": AvailableFlags[]
}

interface Flags {
    [key: string]: FlagOption
}

interface ExtraFlags {
    [key: string]: FlagExtraOption
}

const sharedSupported: SharedSupported = {
    "operatingSystem": ["filename", "flags", "memory"],
    "serverType": ["filename", "flags", "memory", "autorestart", "variables"]
};

const sharedFlags: SharedFlags = {
    "bukkit": ["none", "aikars"],
    "proxy": ["none", "proxy"]
};

export const environment: Environment = {
    "operatingSystem": {
        "linux": {
            "label": "Linux",
            "icon": "IconBrandDebian",
            "config": [
                ...sharedSupported.operatingSystem,
                "gui",
                "autorestart",
                "variables"
            ]
        },
        "windows": {
            "label": "Windows",
            "icon": "IconBrandWindows",
            "config": [
                ...sharedSupported.operatingSystem,
                "gui",
                "autorestart",
                "variables"
            ]
        },
        "pterodactyl": {
            "label": "翼龙面板",
            "icon": "IconServer",
            "config": [
                ...sharedSupported.operatingSystem,
            ]
        },
        "command": {
            "label": "命令行",
            "icon": "IconTerminal",
            "config": [
                ...sharedSupported.operatingSystem,
            ]
        }
    },
    "serverType": {
        "paper": {
            "label": "Paper",
            "icon": "IconBucket",
            "flags": [
                ...sharedFlags.bukkit
            ],
            "config": [
                ...sharedSupported.serverType,
                "gui"
            ]
        },
        "purpur": {
            "label": "Purpur",
            "icon": "IconBucket",
            "flags": [
                ...sharedFlags.bukkit
            ],
            "extraFlags": [
                "vectors"
            ],
            "config": [
                ...sharedSupported.serverType,
                "gui"
            ]
        },
        "waterfall": {
            "label": "Waterfall",
            "icon": "IconNetwork",
            "flags": [
                ...sharedFlags.proxy
            ],
            "config": [
                ...sharedSupported.serverType
            ]
        },
        "velocity": {
            "label": "Velocity",
            "icon": "IconNetwork",
            "flags": [
                ...sharedFlags.proxy
            ],
            "config": [
                ...sharedSupported.serverType
            ]
        }
    }
};

export const config: Config = {
    "filename": {
        "label": "文件名",
        "description": "将用于启动服务器的服务端的名称。",
        "row": 0,
        "type": {
            "component": "TextInput",
            "icon": "IconFile"
        }
    },
    "flags": {
        "label": "参数",
        "description": "可以优化服务器性能的启动参数的集合。",
        "row": 0,
        "type": {
            "component": "Flags",
            "icon": "IconFlag"
        }
    },
    "memory": {
        "label": "内存",
        "description": "分配给服务器的内存 (RAM) 量。不建议低于 <Code>4 GB</Code> 或高于 <Code>12 GB</Code> 的值。",
        "row": 1,
        "type": {
            "component": "Slider",
            "props": {
                "interval": 4,
                "step": 0.5,
                "min": 0.5,
                "max": 20,
                "hoverLabel": value => {
                    return `${value.toFixed(1)} GB`;
                },
                "intervalLabel": value => {
                    return `${value} GB`;
                }
            }
        }
    },
    "gui": {
        "label": "GUI",
        "description": "是否显示服务端内置图形管理界面。",
        "row": 2,
        "type": {
            "component": "Checkbox",
            "icon": "IconAppWindow",
            "props": {
                "label": "启用 GUI"
            }
        }
    },
    "autorestart": {
        "label": "自动重启",
        "description": "是否在崩溃后自动重启。",
        "row": 2,
        "type": {
            "component": "Checkbox",
            "icon": "IconRefresh",
            "props": {
                "label": "启用 自动重启"
            }
        }
    },
    "variables": {
        "label": "使用变量",
        "description": "是否对公共元素使用脚本变量。",
        "row": 2,
        "isAdvanced": true,
        "type": {
            "component": "Checkbox",
            "icon": "IconCode",
            "props": {
                "label": "使用变量"
            }
        }
    }
};

export const flags: Flags = {
    "none": {
        "label": "无"
    },
    "aikars": {
        "label": "Aikar's Flags",
        "description": "牛的"
    },
    "proxy": {
        "label": "代理服",
        "description": "适用于所有代理服务器的通用标志。"
    }
};

export const extraFlags: ExtraFlags = {
    "vectors": {
        "label": "更新的载体（Vectors）",
        "description": "启用 SIMD 操作以优化地图项渲染。",
        "supports": ["aikars"]
    }
};
