// Инструменты
import React from 'react';
import PropTypes from 'prop-types';

// VKUI
import { platform, IOS } from '@vkontakte/vkui';
import {Panel,PanelHeader,PanelHeaderButton,} from '@vkontakte/vkui/dist';

// Icons
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

// CSS
import './Persik.css';

// Other
import persik from '../img/persik.png';

const osName = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Persik
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
