import { useRef, useState } from "react";
import { Switch } from "@mantine/core";
import { OptionModal, OptionModalRef, ToggleState, InputCaption } from "@encode42/mantine-extras";
import { ModalProps } from "./interface/ModalProps";

/**
 * Properties for the flags modal.
 */
export interface FlagModalProps extends ModalProps {
    /**
     * Whether to add incubating vector flags for modern versions of Java Hotspot.
     */
    "defaultModernVectors": ToggleState
}

/**
 * Modal for additional flags options.
 */
export function FlagModal({ open, defaultModernVectors }: FlagModalProps) {
    const [pendingModernVectors, setPendingModernVectors] = useState<boolean>(defaultModernVectors.value);

    const modernVectors = {
        "set": setPendingModernVectors,
        "value": pendingModernVectors,
        "default": defaultModernVectors.value
    };

    const dataModal = useRef<OptionModalRef>(null);

    return (
        <OptionModal open={open} ref={dataModal} values={[modernVectors]} onApply={() => {
            defaultModernVectors.set(modernVectors.value);
        }}>
            {/* Modern Java switch */}
            <InputCaption text="添加一个启用孵化 SIMD 向量的参数，可以显着加快地图项目渲染速度。仅适用于基于 Pufferfish 的分支和运行带有 Hotspot 的 Java 17 的服务器。">
                <Switch label="现代向量" checked={modernVectors.value} disabled={defaultModernVectors.disabled} onChange={event => {
                    modernVectors.set(event.target.checked);
                }} />
            </InputCaption>
        </OptionModal>
    );
}
