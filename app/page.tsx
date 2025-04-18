'use client';

import Link from 'next/link';
import { Button, Typography, Space, Card, Row, Col, Divider, Badge } from 'antd';
import { motion } from 'framer-motion';
import { LoginOutlined, UserAddOutlined, SafetyOutlined, DatabaseOutlined, BarChartOutlined, BookOutlined, AuditOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const { Title, Text, Paragraph } = Typography;

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // 系统特点
  const features = [
    {
      icon: <SafetyOutlined style={{ fontSize: '28px', color: '#1890ff' }} />,
      title: '安全可靠',
      description: '基于区块链技术，保障数据真实性，防止成绩被篡改'
    },
    {
      icon: <DatabaseOutlined style={{ fontSize: '28px', color: '#1890ff' }} />,
      title: '全面记录',
      description: '详细记录学生所有课程成绩，提供完整的学习轨迹'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: '28px', color: '#1890ff' }} />,
      title: '数据分析',
      description: '智能分析成绩趋势，帮助学生了解自己的学习状况'
    },
    {
      icon: <AuditOutlined style={{ fontSize: '28px', color: '#1890ff' }} />,
      title: '权威认证',
      description: '提供权威的成绩认证服务，方便升学和就业使用'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f6ff 0%, #e6f7ff 100%)',
      padding: '60px 20px'
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Badge.Ribbon text="安全认证" color="blue">
              <Title
                level={1}
                style={{
                  color: '#1890ff',
                  marginBottom: '16px',
                  fontFamily: '"Noto Sans SC", sans-serif',
                  fontSize: '42px',
                  fontWeight: 600
                }}
              >
                学生成绩认证系统
              </Title>
            </Badge.Ribbon>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Paragraph
              style={{
                fontSize: '18px',
                color: '#595959',
                maxWidth: '700px',
                margin: '0 auto 40px',
                lineHeight: '1.8'
              }}
            >
              一个安全可靠的学生成绩存储、管理与认证平台，基于区块链技术保障数据真实性。
              我们致力于为学生提供便捷的成绩查询服务，为教师提供高效的成绩管理工具。
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ marginTop: '32px' }}
          >
            <Space size="large">
              <Link href="/login">
                <Button
                  type="primary"
                  size="large"
                  icon={<LoginOutlined />}
                  style={{
                    height: '48px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    fontSize: '16px',
                    background: 'linear-gradient(90deg, #1890ff 0%, #096dd9 100%)'
                  }}
                >
                  立即登录
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="large"
                  icon={<UserAddOutlined />}
                  style={{
                    height: '48px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    fontSize: '16px',
                    borderColor: '#1890ff',
                    color: '#1890ff'
                  }}
                >
                  注册账号
                </Button>
              </Link>
            </Space>
          </motion.div>
        </div>

        <Divider orientation="center" style={{ margin: '40px 0' }}>
          <Text style={{ fontSize: '18px', color: '#595959' }}>系统特点</Text>
        </Divider>

        <motion.div
          variants={container}
          initial="hidden"
          animate={animationComplete ? "show" : "hidden"}
        >
          <Row gutter={[24, 24]} style={{ marginTop: '40px' }}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <motion.div variants={item}>
                  <Card
                    hoverable
                    style={{ height: '100%', borderRadius: '12px', textAlign: 'center' }}
                    bodyStyle={{ padding: '24px 16px' }}
                  >
                    <div style={{ marginBottom: '16px' }}>
                      {feature.icon}
                    </div>
                    <Title level={4} style={{ marginBottom: '12px' }}>
                      {feature.title}
                    </Title>
                    <Text type="secondary">
                      {feature.description}
                    </Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div
            style={{
              marginTop: '80px',
              textAlign: 'center',
              background: 'rgba(24, 144, 255, 0.1)',
              padding: '30px',
              borderRadius: '12px'
            }}
          >
            <Space direction="vertical" size="large">
              <BookOutlined style={{ fontSize: '36px', color: '#1890ff' }} />
              <Title level={3} style={{ margin: 0 }}>
                开启您的学习之旅
              </Title>
              <Paragraph style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                无论您是学生还是教师，我们为您提供高效、便捷的成绩管理服务。
                登录账号，探索更多功能！
              </Paragraph>
            </Space>
          </div>
        </motion.div>

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <Text style={{ color: 'rgba(0,0,0,0.45)' }}>
            © 2023 学生成绩认证系统 - 保障教育数据真实可信
          </Text>
        </div>
      </motion.div>
    </div>
  );
} 