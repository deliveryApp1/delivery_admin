import React from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}

const HomePage: React.FC = (props: Props) => {
    const { t } = useTranslation()
    return (
        <div>{t('menus.home')}</div>
    )
}

export default HomePage