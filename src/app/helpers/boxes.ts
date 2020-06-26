export const boxes: Box[] = [
  {
    id: 1,
    title: 'Spacing',
    num: '01',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, sedculpa inventore repudiandae eum',
  },
  {
    id: 2,
    title: 'Fonts',
    num: '02',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, sedculpa inventore repudiandae eum',
  },
  {
    id: 3,
    title: 'Icons',
    num: '03',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, sedculpa inventore repudiandae eum',
  },
  {
    id: 4,
    title: 'Typography',
    num: '04',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, sedculpa inventore repudiandae eum',
  },
];

export interface Box {
  id: number;
  title: string;
  description: string;
  num: string;
}
