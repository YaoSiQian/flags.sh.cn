import { ActionIcon, Group, GroupProps } from "@mantine/core";
import { IconBrandDiscord, IconBrandGithub, IconHomeQuestion } from "@tabler/icons";
import { ThemeButton } from "~/component/ThemeButton";
import { Anchor } from "@encode42/remix-extras";
import { details } from "~/data/details";
import { ThemePaper } from "@encode42/mantine-extras";

interface FooterProps {
    "extra"?: GroupProps["children"]
}

export function Footer({ extra }: FooterProps) {
    return (
        <ThemePaper>
            <Group position="apart">
                <Group>
                    {extra}
                </Group>
                <Group>
                    <ThemeButton />
                    <ActionIcon component={Anchor} to="/about" title="关于" size="xl" variant="gradient" gradient={{
                        "from": "lime",
                        "to": "green",
                        "deg": 120
                    }}>
                        <IconHomeQuestion color="white" />
                    </ActionIcon>
                    <ActionIcon component={Anchor} to={details.links.discord} title="帮助" size="xl" variant="gradient" gradient={{
                        "from": "#7984f5",
                        "to": "#5865F2",
                        "deg": 120
                    }}>
                        <IconBrandDiscord color="white" />
                    </ActionIcon>
                    <ActionIcon component={Anchor} to={details.links.github} title="GitHub" size="xl" variant="gradient" gradient={{
                        "from": "#555",
                        "to": "#333",
                        "deg": 120
                    }}>
                        <IconBrandGithub color="white" />
                    </ActionIcon>
                </Group>
            </Group>
        </ThemePaper>
    );
}
