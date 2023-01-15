import {Card} from "antd";

export const CustomCard = ({ title, width }) => {
  <Card
    title={title}
    style={{ width: width }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
}