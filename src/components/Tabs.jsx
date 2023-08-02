import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import CardTab from './TabCard';

// const dataaa = () => {
//     return (
        
//     )
// }

const Tabscom = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <Tabs
            defaultActiveKey="2"
            items={["TabsleOutlined", "AndroidOutlined"].map((Icon, i) => {
                const id = String(i + 1);
                return {
                    label: (
                        <span>
                            {id == 1 ? t("body.sectionHead"): t("body.sectionHeads")}
                        </span>
                    ),
                    key: id,
                    children: `${id == 1 ?"hello" : "sdfd"}`,
                };
            })}
        />
    )
}
export default Tabscom;