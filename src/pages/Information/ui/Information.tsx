import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import clsx from 'clsx';
import cls from './Information.module.scss';

interface InFormationItem {
  id: number;
  title: string;
  text: string;
  image: string;
}

const informationItems: InFormationItem[] = [
  {
    id: 1,
    title:
      'A dying art: India’s female seaweed divers look to a brighter future for their girls',
    text:
      'With sacks tied around their saris and well-used goggles as their only equipment, the seaweed collectors of India’s south-east coast have been diving in the Gulf of Mannar for decades, passing skills from mother to daughter.\n' +
      '\n' +
      'The women spend six hours a day in the sea, diving up to 4 metres (12ft) to harvest the seaweed from sharp rocks, holding their breath as they tuck the fronds into bags tied around their waists.\n' +
      '\n' +
      'In Rameswaram, on the Tamil Nadu coast, it is a dying art. More girls are now able to go to school and pursue working lives that are less dependent on the dangerous tides and bruising work.\n' +
      '\n' +
      'Sethunambu, who, like most of the women, goes by only one name, thinks she is about 60 now, and has been diving for much of her adult life. “I am in this profession for the past 20 years, and I have encountered the risks along with other women like me,” she says.',
    image:
      'https://i.guim.co.uk/img/media/8ca7845729da42676365bb7238594078c22522c4/0_0_5184_3888/master/5184.jpg?width=1900&quality=45&dpr=2&s=none',
  },
  {
    id: 2,
    title:
      'Brick by brick: the British manufacturers building a better future for birds',
    text:
      'compulsory to install them in the UK?\n' +
      '\n' +
      'The age of extinction is supported by\n' +
      'theguardian.org\n' +
      'About this content\n' +
      'Emma Snaith\n' +
      'Emma Snaith\n' +
      'Fri 30 Jun 2023 08.00 BST\n' +
      'At first, it is hard to spot. A small hole in the eaves is often all that can be seen. It’s only on closer inspection that a hollow brick can be discerned, slotted neatly into a wall. Inside might be a pair of nesting swifts that have travelled thousands of miles from Africa to the UK.\n' +
      '\n' +
      'At Manthorpe Building Products’ factory in Derbyshire, it takes just under a minute to produce a single swift brick that could provide a safe haven for generations of these migratory birds. Granules of recycled plastic are put into an injection moulding machine and, moments later, the separate parts of the brick come out, before a worker snaps them together.\n' +
      '\n' +
      'Manthorpe has already made 20,000 bricks. Dozens of workers in hi-vis vests group around futuristic-looking machines, producing a wide range of building products from loft hatches to drains. Yet it’s the swift bricks that have proved a surprise hit, with demand steadily increasing year on year, says the company’s managing director, Paul Manning.',
    image:
      'https://i.guim.co.uk/img/media/1067b3250f0eea5adaf2553aec9a4e75326bebdc/0_469_6691_4015/master/6691.jpg?width=1300&quality=45&dpr=2&s=none',
  },
  {
    id: 3,
    title: 'The Enhanced Games – a drugs Olympics where cheaters can prosper',
    text:
      'By now, you may be familiar with Aron D’Souza – an Oxford-educated lawyer, entrepreneur, self-publicist, the type of character for whom LinkedIn was invented – and his bid to become the sports world’s Victor Frankenstein. In publicly announcing his ambitious plans for the Enhanced Games – essentially, a drugs Olympics, where doping is encouraged and anything goes – last week, D’Souza insisted his motives have little to do with personal financial gain.\n' +
      '\n' +
      '“I’ve had a very successful career as a venture capitalist, as a tech entrepreneur,” said the man whose newly created online biography features his inclusion on the 2014 Australian Men’s Style magazine’s “Men of Influence” list. “If I wanted to simply make money I would continue to do that.”',
    image:
      'https://lh3.googleusercontent.com/GcwjeeO6QCdidqrrnI2jgx41_MbQ9B5Yvtf64CaX_Qpj5Y9d1MnGnmidLUNxXnwrVzx83B7CJAoBFl9u2lX1JvPjik1aZASs8DZcaxcLjA',
  },
];

const Information = () => {
  return (
    <>
      <Typography.Title>Information</Typography.Title>
      <Divider />
      <Space direction="vertical">
        {informationItems.map((informationItem, index) => (
          <Card key={informationItem.id}>
            <Row>
              <Col order={index % 2 === 1 ? 2 : 1} className={cls.colLeft}>
                <Card.Meta
                  description={<p>{informationItem.text}</p>}
                  title={<h2 className={cls.title}>{informationItem.title}</h2>}
                />
              </Col>
              <Col order={index % 2 === 1 ? 1 : 2} className={cls.colRight}>
                <img
                  className={clsx(cls.image, {
                    [cls.leftImage]: index % 2 === 1,
                    [cls.rightImage]: index % 2 === 0,
                  })}
                  src={informationItem.image}
                  alt={informationItem.title}
                />
              </Col>
            </Row>
          </Card>
        ))}
      </Space>
    </>
  );
};

export default Information;
