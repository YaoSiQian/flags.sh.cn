import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";

export function ThemeButton() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";

    return (
        <ActionIcon title={`切换到 ${isDark ? "亮色" : "暗色"} 模式`} size="xl" variant="gradient" gradient={isDark ? {
            "from": "yellow",
            "to": "orange",
            "deg": 120
        } : {
            "from": "indigo",
            "to": "violet",
            "deg": 120
        }} onClick={() => {
            toggleColorScheme();
        }}>
            {isDark ? <IconSun /> : <IconMoon />}
        </ActionIcon>
    );
}
