import { useState } from 'react';
import { Col, Divider, Row, Typography } from 'antd';
import { motion } from 'framer-motion';
import cls from './News.module.scss';
import { NewsCard, SelectedCard } from '@/entities/NewsCard';
import { AnimationDetailOverlay } from '@/shared/ui/AnimationDetailOverlay/AnimationDetailOverlay';
import { useAppSelector } from '@/shared/lib/hooks/useSelector';
import { CreateButton, EditButton } from '@/features/news';

const News = () => {
  const { news } = useAppSelector((state) => state.news);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title className={cls.title}>
            Popular Right Now
          </Typography.Title>
        </Col>
        <Col>
          <CreateButton />
        </Col>
      </Row>
      <Divider />
      <Row className={cls.news}>
        <div className={cls.colLeft}>
          {news.slice(0, 3).map((newsItem, index) => (
            <motion.div key={newsItem.id} layoutId={newsItem.id}>
              <NewsCard
                newsItem={newsItem}
                setSelectedId={setSelectedId}
                lessImage={index % 2 === 1}
                actions={{ edit: <EditButton newsItem={newsItem} /> }}
                leftCol
              />
            </motion.div>
          ))}
        </div>

        <div className={cls.colRight}>
          {news.slice(3, news.length).map((newsItem, index) => (
            <motion.div
              key={newsItem.id}
              layoutId={newsItem.id}
              onClick={() => setSelectedId(newsItem.id)}
            >
              <NewsCard
                newsItem={newsItem}
                setSelectedId={setSelectedId}
                lessImage={index % 2 === 1}
                actions={{ edit: <EditButton newsItem={newsItem} /> }}
              />
            </motion.div>
          ))}
        </div>

        <AnimationDetailOverlay
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        >
          {news.map(
            (newsItem) =>
              newsItem.id === selectedId && (
                <SelectedCard key={newsItem.id} selectedItem={newsItem} />
              )
          )}
        </AnimationDetailOverlay>
      </Row>
    </>
  );
};

export default News;
