// import stats from "../../data/data.json";
import { StatSection, StatList, StatTitle, StatItem, StatLabel, StatPercentage } from "./Statistics.styled";

export const Statistics = ({ title, stats}) => {
    return (
        <StatSection>
            {title && <StatTitle>{title}</StatTitle>}

            <StatList>
                {stats.map(stat => {
                    return (
                        <StatItem key={stat.id}>
                            <StatLabel>{stat.label}</StatLabel>
                            <StatPercentage>{stat.percentage}%</StatPercentage>
                        </StatItem>
                    )
                })}
            </StatList>
        </StatSection>
    )
}