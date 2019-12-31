'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		kpn_box: {
			signal: 'sony',
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
				onoff: ['POWER_ON', 'POWER_OFF', 'POWER_TOGGLE'],
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
				id: 'sony',
				type: 'prontohex',
				repetitions: 1,
				options: {
					cmdNumberPrefix: 'DIGIT_',
					minTxInterval: 250
				},
				cmds: ['tv$~10\'S_WAIT',
					'tv$~3D',
					'tv$~3D_DEMO_ON',
					'tv$~3D_OFF',
					'tv$~3D_ON',
					'tv$~ADD_10S_CH_PRESET',
					'tv$~AFT_ON_MFT_OFF',
					'tv$~ALARM',
					'tv$~ALTERNATE_AUDIO',
					'tv$~ALTERNATE_VIDEO',
					'tv$~ANALOG_MODE_ANASEL',
					'tv$~ANTENNA_SWITCH',
					'tv$~ANTENNA_SWITCH_RESET',
					'tv$~AUDIO',
					'tv$~AUDIO_ANALOG_PICTURE_ADJUSTMENT',
					'tv$~AUDIO_QUALITY_SOUND_MODE',
					'tv$~AUDIO_SELECT',
					'tv$~AUTO_PROGRAM_CHANNEL_SCAN',
					'tv$~BALANCE_LEFT',
					'tv$~BALANCE_RIGHT',
					'tv$~BASS_DOWN',
					'tv$~BASS_UP',
					'tv$~BIVL',
					'tv$~BRAVIA_FORWARD',
					'tv$~BRAVIA_NEXT',
					'tv$~BRAVIA_PLAY',
					'tv$~BRAVIA_PREVIOUS',
					'tv$~BRAVIA_REVERSE',
					'tv$~BRAVIA_STOP',
					'tv$~BRAVIA_SYNC_MENU',
					'tv$~BRAVIA_THEATER',
					'tv$~BRIGHTNESS_HIGH',
					'tv$~BRIGHTNESS_LOW',
					'tv$~CATV_/_AIR',
					'tv$~CC',
					'tv$~CHANNEL_ADD',
					'tv$~CHANNEL_DOWN',
					'tv$~CHANNEL_ERASE',
					'tv$~CHANNEL_LOCK',
					'tv$~CHANNEL_UP',
					'tv$~CLOCK_SET',
					'tv$~COLOR_LOW',
					'tv$~COLOR_SYSTEM',
					'tv$~COLOR_VIVID',
					'tv$~CURSOR_DOWN',
					'tv$~CURSOR_ENTER',
					'tv$~CURSOR_LEFT',
					'tv$~CURSOR_RIGHT',
					'tv$~CURSOR_UP',
					'tv$~DEMO_MODE',
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
					'tv$~DIGIT_SEPARATOR',
					'tv$~DISCOVER',
					'tv$~DISPLAY',
					'tv$~DME_X_BRAVIA_MODULE',
					'tv$~DMEX_ONE_TOUCH_(SBB)',
					'tv$~DRC_MODE',
					'tv$~DRC_PALLETTE',
					'tv$~DYNAMIC_COLOR_CLEAR_WHITE_COLOR_TEMP',
					'tv$~ENTER',
					'tv$~ERASE_01S_LBL_PRESET',
					'tv$~ETM_CHANNEL_DOWN',
					'tv$~ETM_CHANNEL_UP',
					'tv$~ETM_SET_END',
					'tv$~ETM_SET_START',
					'tv$~EXCHANGE',
					'tv$~EXIT',
					'tv$~F0_LOCK_MFT_ON',
					'tv$~FAV_+_(SBB)',
					'tv$~FAVORITE',
					'tv$~FINE_DOWN',
					'tv$~FINE_UP',
					'tv$~FLASH_MOTION',
					'tv$~FLUSH_+',
					'tv$~FOOTBALL',
					'tv$~FORMAT_169',
					'tv$~FORMAT_FULL',
					'tv$~FORMAT_FULL_NORMAL_TOGGLE',
					'tv$~FORMAT_NORMAL',
					'tv$~FORMAT_SCROLL',
					'tv$~FORMAT_WIDE',
					'tv$~FORMAT_WIDE_ZOOM',
					'tv$~FORWARD',
					'tv$~FREEZE',
					'tv$~FUNCTION_1',
					'tv$~FUNCTION_2',
					'tv$~FUNCTION_3',
					'tv$~FUNCTION_4',
					'tv$~FUNCTION_5',
					'tv$~FUNCTION_BLUE',
					'tv$~FUNCTION_GREEN',
					'tv$~FUNCTION_RED',
					'tv$~FUNCTION_YELLOW',
					'tv$~GUIDE',
					'tv$~GUIDE_ALTERNATE',
					'tv$~HALF',
					'tv$~HELP',
					'tv$~HOME_THEATRE',
					'tv$~HUE_GREEN',
					'tv$~HUE_PURPLE',
					'tv$~I_MANUAL',
					'tv$~INFO',
					'tv$~INFO_(SBB)',
					'tv$~INPUT_ANALOG_RGB_1_PC',
					'tv$~INPUT_ANTENNA',
					'tv$~INPUT_DIGITAL_RGB_1',
					'tv$~INPUT_DIRECT_RGB_2',
					'tv$~INPUT_DIRECT_RGB_ANALOG_2',
					'tv$~INPUT_HD_1',
					'tv$~INPUT_HD_1_COMPONENT',
					'tv$~INPUT_HD_2',
					'tv$~INPUT_HD_2_COMPONENT',
					'tv$~INPUT_HD15',
					'tv$~INPUT_HDMI_1',
					'tv$~INPUT_HDMI_1_ALTERNATE',
					'tv$~INPUT_HDMI_2',
					'tv$~INPUT_HDMI_2_ALTERNATE',
					'tv$~INPUT_HDMI_3',
					'tv$~INPUT_HDMI_3_ALTERNATE',
					'tv$~INPUT_HDMI_4',
					'tv$~INPUT_HDMI_4_ALTERNATE',
					'tv$~INPUT_HDMI_5',
					'tv$~INPUT_HDMI_5_ALTERNATE',
					'tv$~INPUT_HDMI_SCROLL',
					'tv$~INPUT_MEMORY_STICK',
					'tv$~INPUT_OPTION_1',
					'tv$~INPUT_OPTION_2',
					'tv$~INPUT_PC/RGB',
					'tv$~INPUT_RGB_/_COMPOSITE',
					'tv$~INPUT_S/COMPOSITE',
					'tv$~INPUT_SCROLL',
					'tv$~INPUT_VIDEO_1',
					'tv$~INPUT_VIDEO_10',
					'tv$~INPUT_VIDEO_11',
					'tv$~INPUT_VIDEO_12',
					'tv$~INPUT_VIDEO_2',
					'tv$~INPUT_VIDEO_3',
					'tv$~INPUT_VIDEO_4',
					'tv$~INPUT_VIDEO_5',
					'tv$~INPUT_VIDEO_6',
					'tv$~INPUT_VIDEO_7',
					'tv$~INPUT_VIDEO_8',
					'tv$~INPUT_VIDEO_9',
					'tv$~INTERNET_APPS',
					'tv$~INTERNET_CC_SUBTITLE',
					'tv$~INTERNET_QRIOCITY',
					'tv$~INTERNET_TV',
					'tv$~INTERNET_VIDEO',
					'tv$~INTERNET_WIDGETS',
					'tv$~KEYPAD',
					'tv$~LEVEL_INDICATION',
					'tv$~MATRIX_/_SURROUND',
					'tv$~MEMORY_STICK',
					'tv$~MENU_(SBB)',
					'tv$~MENU_ACTION',
					'tv$~MENU_HOME',
					'tv$~MENU_MAIN',
					'tv$~MENU_OPTIONS',
					'tv$~MENU_POP_UP',
					'tv$~MENU_SYNC',
					'tv$~MENU_TOP',
					'tv$~MOSAIC',
					'tv$~MTS_SAP',
					'tv$~MULTISTROBE_1',
					'tv$~MULTISTROBE_2',
					'tv$~MUTE_TOGGLE',
					'tv$~NETFLIX',
					'tv$~NEXT',
					'tv$~NOISE_REDUCER',
					'tv$~NOTCH_FILTER',
					'tv$~OPTION',
					'tv$~OSIM',
					'tv$~PAUSE',
					'tv$~PHOTO_FRAME',
					'tv$~PICTURE_HIGH',
					'tv$~PICTURE_LOW',
					'tv$~PICTURE_MODE',
					'tv$~PICTURE_MODE_TIMER',
					'tv$~PICTURE_OFF',
					'tv$~PIP',
					'tv$~PIP_CHANNEL_DOWN',
					'tv$~PIP_CHANNEL_UP',
					'tv$~PIP_OFF',
					'tv$~PIP_POSITION',
					'tv$~PIP_TV_/_VIDEO',
					'tv$~PLAY',
					'tv$~POWER_OFF',
					'tv$~POWER_ON',
					'tv$~POWER_SAVING',
					'tv$~POWER_TOGGLE',
					'tv$~PRESET',
					'tv$~PREVIOUS',
					'tv$~PREVIOUS_CHANNEL',
					'tv$~QRIOCITY',
					'tv$~REAR_VOLUME_DOWN',
					'tv$~REAR_VOLUME_UP',
					'tv$~RECORD',
					'tv$~RELATED_SEARCH',
					'tv$~REPLAY',
					'tv$~RESET',
					'tv$~RETURN',
					'tv$~RETURN_MENU_ENTER',
					'tv$~REVERSE',
					'tv$~RF',
					'tv$~RGB_ON',
					'tv$~SCENE',
					'tv$~SCENE_SELECT',
					'tv$~SEARCH_/_SEEK_UP',
					'tv$~SEARCH_/SEEK_DOWN',
					'tv$~SEEK',
					'tv$~SHARPNESS_HIGH',
					'tv$~SHARPNESS_LOW',
					'tv$~SHOP_DEMO_COLOR_SPACE',
					'tv$~SHOP_DEMO_DETAIL_ENHANSER',
					'tv$~SHOP_DEMO_FORCED_DYNAMIC',
					'tv$~SHOP_DEMO_MODE',
					'tv$~SLEEP',
					'tv$~SOCIAL_VIEW',
					'tv$~SOLALIZATION',
					'tv$~SOUND_MODE',
					'tv$~SOUND_MODE_LOUDNESS',
					'tv$~SPEAKER_OFF',
					'tv$~SPLIT',
					'tv$~STEREO_/_MONO',
					'tv$~STOP',
					'tv$~STORE_MODE',
					'tv$~STROBE_MANUAL',
					'tv$~SUBTITLE',
					'tv$~TABLET_CHANGE',
					'tv$~TELETEXT',
					'tv$~TELETEXT_HOLD',
					'tv$~TELETEXT_PAGE_DOWN',
					'tv$~TELETEXT_PAGE_UP',
					'tv$~TELETEXT_REVEAL',
					'tv$~TEST',
					'tv$~THEATER',
					'tv$~THEATER_MODE',
					'tv$~TIMER',
					'tv$~TIMER_2',
					'tv$~TIMER_DOWN',
					'tv$~TIMER_UP',
					'tv$~TRACK_ID',
					'tv$~TREBLE_DOWN',
					'tv$~TREBLE_UP',
					'tv$~TV_SCAN_INDEX',
					'tv$~TV_SYSTEM',
					'tv$~TWIN_VIEW',
					'tv$~VEHICLE_TREBLE_MODE',
					'tv$~VELOCITY_SCAN_TOGGLE',
					'tv$~VERTICLE_HOLD_DOWN',
					'tv$~VERTICLE_HOLD_UP',
					'tv$~VIDEO_ANALOG_PICTURE_ADJUSTMENT',
					'tv$~VIDEO_RESET',
					'tv$~VIDEOTEXT',
					'tv$~VIP/CANVAS',
					'tv$~VOLUME_DOWN',
					'tv$~VOLUME_UP',
					'tv$~WIDGETS',
					'tv$~ZOOM',
					'tv$~INPUT_HDMI_1_(2011)',
					'tv$~INPUT_HDMI_2_(2011)',
					'tv$~INPUT_HDMI_3_(2011)',
					'tv$~INPUT_HDMI_4_(2011)',
					'tv$~INPUT_HDMI_5_(2011)',
					'tv$~INPUT_HD_1_(2011)',
					'tv$~INPUT_HD_2_(2011)',
					'tv$~INPUT_HDMI_SCROLL_(2011)',
					'tv$~INPUT_HDMI_1_(2010)',
					'tv$~INPUT_HDMI_2_(2010)',
					'tv$~INPUT_HDMI_3_(2010)',
					'tv$~INPUT_HDMI_4_(2010)',
					'tv$~INPUT_HDMI_5_(2010)',
					'tv$~INPUT_HD_1_(2010)',
					'tv$~INPUT_HD_2_(2010)',
					'tv$~INPUT_HDMI_SCROLL_(2010)'
				],
				parseCmd: undefined
			}
		}
	}
};