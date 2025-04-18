'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface BackButtonProps {
    route?: string; // 可选，指定返回的路由
}

export default function BackButton({ route }: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        if (route) {
            router.push(route);
        } else {
            router.back();
        }
    };

    return (
        <Button
            type="primary"
            icon={<ArrowLeftOutlined />}
            onClick={handleBack}
            style={{ marginBottom: 16 }}
        >
            返回
        </Button>
    );
} 