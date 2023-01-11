import { Group, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { Badge } from "a/icon/Badge";
import { ThemePaper } from "@encode42/mantine-extras";
import { Anchor } from "@encode42/remix-extras";

export function Header() {
    const theme = useMantineTheme();

    return (
        <ThemePaper>
            <Stack>
                <Anchor to="/" underline={false}>
                    <Group spacing="xl" position="center">
                        <Badge />
                        <Title variant="gradient" gradient={{
                            "from": "lime",
                            "to": "green",
                            "deg": 120
                        }} sx={{
                            "fontSize": theme.fontSizes.xl * 2
                        }}>flags.sh.cn</Title>
                    </Group>
                </Anchor>
                <Text size="lg" align="center">一个简单的脚本生成器，用于以最佳参数启动您的 Minecraft 服务器。</Text>
            </Stack>
        </ThemePaper>
    );
}
