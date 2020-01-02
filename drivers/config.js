'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		kpn_box: {
			signal: 'kpn',
			images: {
				small: '../ir_generator/assets/images/small.jpg',
				large: '../ir_generator/assets/images/large.jpg'
			},
			pair: {
				viewOrder: ['generic_check_device', 'generic_done'],
				views: [{
					template: './lib/pair/check_device.html',
					options: {
						title: 'views.generic_done.title',
						device_exists_message: 'views.generic_check_device.device_exists_message',
						prepend: '',
						append: ''
					},
					prepend: [],
					append: [],
					id: 'generic_check_device'
				}, {
					template: './lib/pair/done.html',
					options: {
						title: 'views.generic_done.title',
						prepend: '',
						append: ''
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			id: 'kpn_box',
			name: 'kpn_box',
			class: 'tv',
			icon: '../ir_generator/assets/remote.svg',
			cmdType: 'tv',
			capabilities: ['onoff',
				'volume_mute',
				'volume_up',
				'volume_down',
				'channel_up',
				'channel_down'
			],
			capabilityToCommandMap: {
				onoff: 'POWER_TOGGLE',
				volume_mute: 'MUTE_TOGGLE',
				volume_up: 'VOLUME_UP',
				volume_down: 'VOLUME_DOWN',
				channel_up: 'CHANNEL_UP',
				channel_down: 'CHANNEL_DOWN'
			},
			actions: [{
				id: 'kpn_box:send_cmd',
				title: 'ir_generator.flow.send_cmd',
				args: [{
					name: 'cmd',
					type: 'autocomplete'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=kpn_box'
				}]
			}, {
				id: 'kpn_box:send_cmd_number',
				title: 'ir_generator.flow.send_cmd_number',
				args: [{
					name: 'number',
					type: 'number',
					min: '0',
					max: '9999'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=kpn_box'
				}]
			}],
			driver: './lib/ir/driver',
			signalDefinition: {
				id: 'kpn',
				type: 'prontohex',
				repetitions: 1,
				options: {
					cmdNumberPrefix: 'DIGIT_',
					minTxInterval: 250
				},
				cmds: [
					'tv$~BACK',
					'tv$~CHANNEL_DOWN',
					'tv$~CHANNEL_UP',
					'tv$~CURSOR_DOWN',
					'tv$~CURSOR_ENTER',
					'tv$~CURSOR_LEFT',
					'tv$~CURSOR_RIGHT',
					'tv$~CURSOR_UP',
					'tv$~DIGIT_0',
					'tv$~DIGIT_1',
					'tv$~DIGIT_2',
					'tv$~DIGIT_3',
					'tv$~DIGIT_4',
					'tv$~DIGIT_5',
					'tv$~DIGIT_6',
					'tv$~DIGIT_7',
					'tv$~DIGIT_8',
					'tv$~DIGIT_9',
					'tv$~FORWARD',
					'tv$~FUNCTION_BLUE',
					'tv$~FUNCTION_GREEN',
					'tv$~FUNCTION_RED',
					'tv$~FUNCTION_YELLOW',
					'tv$~GUIDE',
					'tv$~MENU',
					'tv$~MUTE_TOGGLE',
					'tv$~PAUSE',
					'tv$~POWER_OFF',
					'tv$~POWER_ON',
					'tv$~RADIO',
					'tv$~RECORD',
					'tv$~REWIND',
					'tv$~STOP',
					'tv$~SOURCE',
					'tv$~TELETEXT',
					'tv$~TV',
					'tv$~VOLUME_DOWN',
					'tv$~VOLUME_UP'
				],
				parseCmd: undefined
			}
		}
	}
};
