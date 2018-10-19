const utils = require('../utils');

/**
 *  Constant heatpumpValueMap descrips the mapping Array index and descriptive name of this value.
 */
const valueMap = new Map();
valueMap.set('ID_WEB_Temperatur_TVL',10);
valueMap.set('ID_WEB_Temperatur_TRL',11);
valueMap.set('ID_WEB_Sollwert_TRL_HZ',12);
valueMap.set('ID_WEB_Temperatur_TRL_ext',13);
valueMap.set('ID_WEB_Temperatur_THG',14);
valueMap.set('ID_WEB_Temperatur_TA',15);
valueMap.set('ID_WEB_Mitteltemperatur',16);
valueMap.set('ID_WEB_Temperatur_TBW',17);
valueMap.set('ID_WEB_Einst_BWS_akt',18);
valueMap.set('ID_WEB_Temperatur_TWE',19);
valueMap.set('ID_WEB_Temperatur_TWA',20);
valueMap.set('ID_WEB_Temperatur_TFB1 ',21);
valueMap.set('ID_WEB_Sollwert_TVL_MK1',22);
valueMap.set('ID_WEB_Temperatur_RFV  ',23);
valueMap.set('ID_WEB_Temperatur_TFB2',24);
valueMap.set('ID_WEB_Sollwert_TVL_MK2',25);
valueMap.set('ID_WEB_Temperatur_TSK',26);
valueMap.set('ID_WEB_Temperatur_TSS',27);
valueMap.set('ID_WEB_Temperatur_TEE',28);
valueMap.set('ID_WEB_ASDin',29);
valueMap.set('ID_WEB_BWTin',30);
valueMap.set('ID_WEB_EVUin',31);
valueMap.set('ID_WEB_HDin',32);
valueMap.set('ID_WEB_MOTin',33);
valueMap.set('ID_WEB_NDin',34);
valueMap.set('ID_WEB_PEXin',35);
valueMap.set('ID_WEB_SWTin',36);
valueMap.set('ID_WEB_AVout',37);
valueMap.set('ID_WEB_BUPout',38);
valueMap.set('ID_WEB_HUPout',39);
valueMap.set('ID_WEB_MA1out',40);
valueMap.set('ID_WEB_MZ1out',41);
valueMap.set('ID_WEB_VENout',42);
valueMap.set('ID_WEB_VBOout',43);
valueMap.set('ID_WEB_VD1out',44);
valueMap.set('ID_WEB_VD2out',45);
valueMap.set('ID_WEB_ZIPout',46);
valueMap.set('ID_WEB_ZUPout',47);
valueMap.set('ID_WEB_ZW1out',48);
valueMap.set('ID_WEB_ZW2SSTout',49);
valueMap.set('ID_WEB_ZW3SSTout',50);
valueMap.set('ID_WEB_FP2out',51);
valueMap.set('ID_WEB_SLPout',52);
valueMap.set('ID_WEB_SUPout',53);
valueMap.set('ID_WEB_MZ2out',54);
valueMap.set('ID_WEB_MA2out',55);
valueMap.set('ID_WEB_Zaehler_BetrZeitVD1',56);
valueMap.set('ID_WEB_Zaehler_BetrZeitImpVD1',57);
valueMap.set('ID_WEB_Zaehler_BetrZeitVD2',58);
valueMap.set('ID_WEB_Zaehler_BetrZeitImpVD2',59);
valueMap.set('ID_WEB_Zaehler_BetrZeitZWE1',60);
valueMap.set('ID_WEB_Zaehler_BetrZeitZWE2',61);
valueMap.set('ID_WEB_Zaehler_BetrZeitZWE3',62);
valueMap.set('ID_WEB_Zaehler_BetrZeitWP',63);
valueMap.set('ID_WEB_Zaehler_BetrZeitHz',64);
valueMap.set('ID_WEB_Zaehler_BetrZeitBW',65);
valueMap.set('ID_WEB_Zaehler_BetrZeitKue',66);
valueMap.set('ID_WEB_Time_WPein_akt',67);
valueMap.set('ID_WEB_Time_ZWE1_akt',68);
valueMap.set('ID_WEB_Time_ZWE2_akt',69);
valueMap.set('ID_WEB_Timer_EinschVerz',70);
valueMap.set('ID_WEB_Time_SSPAUS_akt',71);
valueMap.set('ID_WEB_Time_SSPEIN_akt',72);
valueMap.set('ID_WEB_Time_VDStd_akt',73);
valueMap.set('ID_WEB_Time_HRM_akt',74);
valueMap.set('ID_WEB_Time_HRW_akt',75);
valueMap.set('ID_WEB_Time_LGS_akt',76);
valueMap.set('ID_WEB_Time_SBW_akt',77);
valueMap.set('ID_WEB_Code_WP_akt',78);
valueMap.set('ID_WEB_BIV_Stufe_akt',79);
valueMap.set('ID_WEB_WP_BZ_akt',80);
valueMap.set('ID_WEB_SoftStand1',81);
valueMap.set('ID_WEB_SoftStand2',82);
valueMap.set('ID_WEB_SoftStand3',83);
valueMap.set('ID_WEB_SoftStand4',84);
valueMap.set('ID_WEB_SoftStand5',85);
valueMap.set('ID_WEB_SoftStand6',86);
valueMap.set('ID_WEB_SoftStand7',87);
valueMap.set('ID_WEB_SoftStand8',88);
valueMap.set('ID_WEB_SoftStand9',89);
valueMap.set('ID_WEB_SoftStand10',90);
valueMap.set('ID_WEB_AdresseIP_akt',91);
valueMap.set('ID_WEB_SubNetMask_akt',92);
valueMap.set('ID_WEB_Add_Broadcast',93);
valueMap.set('ID_WEB_Add_StdGateway',94);
valueMap.set('ID_WEB_ERROR_Time0',95);
valueMap.set('ID_WEB_ERROR_Time1',96);
valueMap.set('ID_WEB_ERROR_Time2',97);
valueMap.set('ID_WEB_ERROR_Time3',98);
valueMap.set('ID_WEB_ERROR_Time4',99);
valueMap.set('ID_WEB_ERROR_Nr0',100);
valueMap.set('ID_WEB_ERROR_Nr1',101);
valueMap.set('ID_WEB_ERROR_Nr2',102);
valueMap.set('ID_WEB_ERROR_Nr3',103);
valueMap.set('ID_WEB_ERROR_Nr4',104);
valueMap.set('ID_WEB_AnzahlFehlerInSpeicher',105);
valueMap.set('ID_WEB_Switchoff_file_Nr0',106);
valueMap.set('ID_WEB_Switchoff_file_Nr1',107);
valueMap.set('ID_WEB_Switchoff_file_Nr2',108);
valueMap.set('ID_WEB_Switchoff_file_Nr3',109);
valueMap.set('ID_WEB_Switchoff_file_Nr4',110);
valueMap.set('ID_WEB_Switchoff_file_Time0',111);
valueMap.set('ID_WEB_Switchoff_file_Time1',112);
valueMap.set('ID_WEB_Switchoff_file_Time2',113);
valueMap.set('ID_WEB_Switchoff_file_Time3',114);
valueMap.set('ID_WEB_Switchoff_file_Time4',115);
valueMap.set('ID_WEB_Comfort_exists',116);
valueMap.set('ID_WEB_HauptMenuStatus_Zeile1',117);
valueMap.set('ID_WEB_HauptMenuStatus_Zeile2',118);
valueMap.set('ID_WEB_HauptMenuStatus_Zeile3',119);
valueMap.set('ID_WEB_HauptMenuStatus_Zeit',120);
valueMap.set('ID_WEB_HauptMenuAHP_Stufe',121);
valueMap.set('ID_WEB_HauptMenuAHP_Temp',122);
valueMap.set('ID_WEB_HauptMenuAHP_Zeit',123);
valueMap.set('ID_WEB_SH_BWW',124);
valueMap.set('ID_WEB_SH_HZ',125);
valueMap.set('ID_WEB_SH_MK1',126);
valueMap.set('ID_WEB_SH_MK2',127);
valueMap.set('ID_WEB_Einst_Kurzrpgramm',128);
valueMap.set('ID_WEB_StatusSlave_1',129);
valueMap.set('ID_WEB_StatusSlave_2',130);
valueMap.set('ID_WEB_StatusSlave_3',131);
valueMap.set('ID_WEB_StatusSlave_4',132);
valueMap.set('ID_WEB_StatusSlave_5',133);
valueMap.set('ID_WEB_AktuelleTimeStamp',134);
valueMap.set('ID_WEB_SH_MK3',135);
valueMap.set('ID_WEB_Sollwert_TVL_MK3',136);
valueMap.set('ID_WEB_Temperatur_TFB3',137);
valueMap.set('ID_WEB_MZ3out',138);
valueMap.set('ID_WEB_MA3out',139);
valueMap.set('ID_WEB_FP3out',140);
valueMap.set('ID_WEB_Time_AbtIn',141);
valueMap.set('ID_WEB_Temperatur_RFV2',142);
valueMap.set('ID_WEB_Temperatur_RFV3',143);
valueMap.set('ID_WEB_SH_SW',144);
valueMap.set('ID_WEB_Zaehler_BetrZeitSW',145);
valueMap.set('ID_WEB_FreigabKuehl',146);
valueMap.set('ID_WEB_AnalogIn',147);
valueMap.set('ID_WEB_SonderZeichen',148);
valueMap.set('ID_WEB_SH_ZIP',149);
valueMap.set('ID_WEB_WebsrvProgrammWerteBeobarten',150);
valueMap.set('ID_WEB_WMZ_Heizung',151);
valueMap.set('ID_WEB_WMZ_Brauchwasser',152);
valueMap.set('ID_WEB_WMZ_Schwimmbad',153);
valueMap.set('ID_WEB_WMZ_Seit',154);
valueMap.set('ID_WEB_WMZ_Durchfluss',155);
valueMap.set('ID_WEB_AnalogOut1',156);
valueMap.set('ID_WEB_AnalogOut2',157);
valueMap.set('ID_WEB_Time_Heissgas',158);
valueMap.set('ID_WEB_Temp_Lueftung_Zuluft',159);
valueMap.set('ID_WEB_Temp_Lueftung_Abluft',160);
valueMap.set('ID_WEB_Zaehler_BetrZeitSolar',161);
valueMap.set('ID_WEB_AnalogOut3',162);
valueMap.set('ID_WEB_AnalogOut4',163);
valueMap.set('ID_WEB_Out_VZU',164);
valueMap.set('ID_WEB_Out_VAB',165);
valueMap.set('ID_WEB_Out_VSK',166);
valueMap.set('ID_WEB_Out_FRH',167);
valueMap.set('ID_WEB_AnalogIn2',168);
valueMap.set('ID_WEB_AnalogIn3',169);
valueMap.set('ID_WEB_SAXin',170);
valueMap.set('ID_WEB_SPLin',171);
valueMap.set('ID_WEB_Compact_exists',172);
valueMap.set('ID_WEB_Durchfluss_WQ',173);
valueMap.set('ID_WEB_LIN_exists',174);
valueMap.set('ID_WEB_LIN_ANSAUG_VERDAMPFER',175);
valueMap.set('ID_WEB_LIN_ANSAUG_VERDICHTER',176);
valueMap.set('ID_WEB_LIN_VDH',177);
valueMap.set('ID_WEB_LIN_UH',178);
valueMap.set('ID_WEB_LIN_UH_Soll',179);
valueMap.set('ID_WEB_LIN_HD',180);
valueMap.set('ID_WEB_LIN_ND',181);
valueMap.set('ID_WEB_LIN_VDH_out',182);
valueMap.set('ID_WEB_HZIO_PWM',183);
valueMap.set('ID_WEB_HZIO_VEN',184);
valueMap.set('ID_WEB_HZIO_EVU2',185);
valueMap.set('ID_WEB_HZIO_STB',186);
valueMap.set('ID_WEB_SEC_Qh_Soll',187);
valueMap.set('ID_WEB_SEC_Qh_Ist',188);
valueMap.set('ID_WEB_SEC_TVL_Soll',189);
valueMap.set('ID_WEB_SEC_Software',190);
valueMap.set('ID_WEB_SEC_BZ',191);
valueMap.set('ID_WEB_SEC_VWV',192);
valueMap.set('ID_WEB_SEC_VD',193);
valueMap.set('ID_WEB_SEC_VerdEVI',194);
valueMap.set('ID_WEB_SEC_AnsEVI',195);
valueMap.set('ID_WEB_SEC_UEH_EVI',196);
valueMap.set('ID_WEB_SEC_UEH_EVI_S',197);
valueMap.set('ID_WEB_SEC_KondTemp',198);
valueMap.set('ID_WEB_SEC_FlussigEx',199);
valueMap.set('ID_WEB_SEC_UK_EEV',200);
valueMap.set('ID_WEB_SEC_EVI_Druck',201);
valueMap.set('ID_WEB_SEC_U_Inv',202);
valueMap.set('ID_WEB_Temperatur_THG_2',203);
valueMap.set('ID_WEB_Temperatur_TWE_2',204);
valueMap.set('ID_WEB_LIN_ANSAUG_VERDAMPFER_2',205);
valueMap.set('ID_WEB_LIN_ANSAUG_VERDICHTER_2',206);
valueMap.set('ID_WEB_LIN_VDH_2',207);
valueMap.set('ID_WEB_LIN_UH_2',208);
valueMap.set('ID_WEB_LIN_UH_Soll_2',209);
valueMap.set('ID_WEB_LIN_HD_2',210);
valueMap.set('ID_WEB_LIN_ND_2',211);
valueMap.set('ID_WEB_HDin_2',212);
valueMap.set('ID_WEB_AVout_2',213);
valueMap.set('ID_WEB_VBOout_2',214);
valueMap.set('ID_WEB_VD1out_2',215);
valueMap.set('ID_WEB_LIN_VDH_out_2',216);
valueMap.set('ID_WEB_Switchoff2_file_Nr0',217);
valueMap.set('ID_WEB_Switchoff2_file2_Nr1',218);
valueMap.set('ID_WEB_Switchoff2_file2_Nr2',219);
valueMap.set('ID_WEB_Switchoff2_file2_Nr3',220);
valueMap.set('ID_WEB_Switchoff2_file2_Nr4',221);
valueMap.set('ID_WEB_Switchoff2_file_Time0',222);
valueMap.set('ID_WEB_Switchoff2_file_Time1',223);
valueMap.set('ID_WEB_Switchoff2_file_Time2',224);
valueMap.set('ID_WEB_Switchoff2_file_Time3',225);
valueMap.set('ID_WEB_Switchoff2_file_Time4',226);
valueMap.set('ID_WEB_RBE_RT_Ist',227);
valueMap.set('ID_WEB_RBE_RT_Soll',228);
valueMap.set('ID_WEB_Temperatur_BW_oben',229);
valueMap.set('ID_WEB_Code_WP_akt_2',230);
valueMap.set('ID_WEB_Freq_VD',231);

/**
 * Return the complete List of Heatpump Values
 * A Heatpump value is a value which can't be changed.
 * 
 * @param {Int32Array} values
 */
function getMappedValues(values) {
    return {
        'ID_WEB_Temperatur_TVL': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TVL')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TVL')] / 10,
            'name': 'Vorlauftemperatur Heizkreis',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TRL': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TRL')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TRL')] / 10,
            'name': 'Rücklauftemperatur Heizkreis',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Sollwert_TRL_HZ': {
			'rawvalue': values[valueMap.get('ID_WEB_Sollwert_TRL_HZ')],
			'value': values[valueMap.get('ID_WEB_Sollwert_TRL_HZ')] / 10,
            'name': 'Rücklauf-Soll Heizkreis',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TRL_ext': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TRL_ext')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TRL_ext')] / 10,
            'name': 'Rücklauftemperatur im Trennspeicher.',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_THG': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_THG')],
			'value': values[valueMap.get('ID_WEB_Temperatur_THG')] / 10,
            'name': 'Heisgastemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TA': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TA')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TA')] / 10,
            'name': 'Aussentemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Mitteltemperatur': {
			'rawvalue': values[valueMap.get('ID_WEB_Mitteltemperatur')],
			'value': values[valueMap.get('ID_WEB_Mitteltemperatur')] / 10,
            'name': 'Durchschnittstemperatur Aussen über 24 h (Funktion Heizgrenze)',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TBW': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TBW')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TBW')] / 10,
            'name': 'Warmwasser Ist-Temperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Einst_BWS_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Einst_BWS_akt')],
			'value': values[valueMap.get('ID_WEB_Einst_BWS_akt')] / 10,
            'name': 'Warmwasser Soll-Temperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TWE': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TWE')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TWE')] / 10,
            'name': 'Wärmequellen-Eintrittstemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TWA': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TWA')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TWA')] / 10,
            'name': 'Wärmequellen-Austrittstemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TFB1': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TFB1')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TFB1')] / 10,
            'name': 'Mischkreis 1 Vorlauftemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Sollwert_TVL_MK1': {
			'rawvalue': values[valueMap.get('ID_WEB_Sollwert_TVL_MK1')],
			'value': values[valueMap.get('ID_WEB_Sollwert_TVL_MK1')] / 10,
            'name': 'Mischkreis 1 Vorlauf-Soll-Temperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_RFV  ': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_RFV')],
			'value': values[valueMap.get('ID_WEB_Temperatur_RFV')] / 10,
            'name': 'Raumtemperatur Raumstation 1',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TFB2': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TFB2')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TFB2')] / 10,
            'name': 'Mischkreis 2 Vorlauftemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Sollwert_TVL_MK2': {
			'rawvalue': values[valueMap.get('ID_WEB_Sollwert_TVL_MK2')],
			'value': values[valueMap.get('ID_WEB_Sollwert_TVL_MK2')] / 10,
            'name': 'Mischkreis 2 Vorlauf-Soll-Temperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TSK': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TSK')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TSK')] / 10,
            'name': 'Fühler Solarkollektor',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TSS': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TSS')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TSS')] / 10,
            'name': 'Fühler Solarspeicher',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TEE': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TEE')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TEE')] / 10,
            'name': 'Fühler externe Energiequelle',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_ASDin': {
			'rawvalue': values[valueMap.get('ID_WEB_ASDin')],
			'value': values[valueMap.get('ID_WEB_ASDin')],
            'name': 'Eingang "Abtauende, Soledruck, Durchfluss"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_BWTin': {
			'rawvalue': values[valueMap.get('ID_WEB_BWTin')],
			'value': values[valueMap.get('ID_WEB_BWTin')],
            'name': 'Eingang "Brauchwarmwasserthermostat"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_EVUin': {
			'rawvalue': values[valueMap.get('ID_WEB_EVUin')],
			'value': values[valueMap.get('ID_WEB_EVUin')],
            'name': 'Eingang "EVU Sperre"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_HDin': {
			'rawvalue': values[valueMap.get('ID_WEB_HDin')],
			'value': values[valueMap.get('ID_WEB_HDin')],
            'name': 'Eingang "Hochdruck Kältekreis"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_MOTin': {
			'rawvalue': values[valueMap.get('ID_WEB_MOTin')],
			'value': values[valueMap.get('ID_WEB_MOTin')],
            'name': 'Eingang "Motorschutz OK"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_NDin': {
			'rawvalue': values[valueMap.get('ID_WEB_NDin')],
			'value': values[valueMap.get('ID_WEB_NDin')],
            'name': 'Eingang "Niederdruck"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_PEXin': {
			'rawvalue': values[valueMap.get('ID_WEB_PEXin')],
			'value': values[valueMap.get('ID_WEB_PEXin')],
            'name': 'Eingang "Überwachungskontakt für Potentiostat"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_SWTin': {
			'rawvalue': values[valueMap.get('ID_WEB_SWTin')],
			'value': values[valueMap.get('ID_WEB_SWTin')],
            'name': 'Eingang "Schwimmbadthermostat"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_AVout': {
			'rawvalue': values[valueMap.get('ID_WEB_AVout')],
			'value': values[valueMap.get('ID_WEB_AVout')],
            'name': 'Ausgang "Abtauventil"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_BUPout': {
			'rawvalue': values[valueMap.get('ID_WEB_BUPout')],
			'value': values[valueMap.get('ID_WEB_BUPout')],
            'name': 'Ausgang "Brauchwasserpumpe/Umstellventil"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_HUPout': {
			'rawvalue': values[valueMap.get('ID_WEB_HUPout')],
			'value': values[valueMap.get('ID_WEB_HUPout')],
            'name': 'Ausgang "Heizungsumwälzpumpe"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_MA1out': {
			'rawvalue': values[valueMap.get('ID_WEB_MA1out')],
			'value': values[valueMap.get('ID_WEB_MA1out')],
            'name': 'Ausgang "Mischkreis 1 Auf"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_MZ1out': {
			'rawvalue': values[valueMap.get('ID_WEB_MZ1out')],
			'value': values[valueMap.get('ID_WEB_MZ1out')],
            'name': 'Ausgang "Mischkreis 1 Zu"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_VENout': {
			'rawvalue': values[valueMap.get('ID_WEB_VENout')],
			'value': values[valueMap.get('ID_WEB_VENout')],
            'name': 'Ausgang "Ventilation (Lüftung)"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_VBOout': {
			'rawvalue': values[valueMap.get('ID_WEB_VBOout')],
			'value': values[valueMap.get('ID_WEB_VBOout')],
            'name': 'Ausgang "Solepumpe/Ventilator"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_VD1out': {
			'rawvalue': values[valueMap.get('ID_WEB_VD1out')],
			'value': values[valueMap.get('ID_WEB_VD1out')],
            'name': 'Ausgang "Verdichter 1"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_VD2out': {
			'rawvalue': values[valueMap.get('ID_WEB_VD2out')],
			'value': values[valueMap.get('ID_WEB_VD2out')],
            'name': 'Ausgang "Verdichter 2"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_ZIPout': {
			'rawvalue': values[valueMap.get('ID_WEB_ZIPout')],
			'value': values[valueMap.get('ID_WEB_ZIPout')],
            'name': 'Ausgang "Zirkulationspumpe"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_ZUPout': {
			'rawvalue': values[valueMap.get('ID_WEB_ZUPout')],
			'value': values[valueMap.get('ID_WEB_ZUPout')],
            'name': 'Ausgang "Zusatzumwälzpumpe"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_ZW1out': {
			'rawvalue': values[valueMap.get('ID_WEB_ZW1out')],
			'value': values[valueMap.get('ID_WEB_ZW1out')],
            'name': 'Ausgang "Steuersignal Zusatzheizung v. Heizung"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_ZW2SSTout': {
			'rawvalue': values[valueMap.get('ID_WEB_ZW2SSTout')],
			'value': values[valueMap.get('ID_WEB_ZW2SSTout')],
            'name': 'Ausgang "Steuersignal Zusatzheizung/Störsignal"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_ZW3SSTout': {
			'rawvalue': values[valueMap.get('ID_WEB_ZW3SSTout')],
			'value': values[valueMap.get('ID_WEB_ZW3SSTout')],
            'name': 'Ausgang "Zusatzheizung 3"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_FP2out': {
			'rawvalue': values[valueMap.get('ID_WEB_FP2out')],
			'value': values[valueMap.get('ID_WEB_FP2out')],
            'name': 'Ausgang "Pumpe Mischkreis 2"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_SLPout': {
			'rawvalue': values[valueMap.get('ID_WEB_SLPout')],
			'value': values[valueMap.get('ID_WEB_SLPout')],
            'name': 'Ausgang "Solarladepumpe"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_SUPout': {
			'rawvalue': values[valueMap.get('ID_WEB_SUPout')],
			'value': values[valueMap.get('ID_WEB_SUPout')],
            'name': 'Ausgang "Schwimmbadpumpe"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_MZ2out': {
			'rawvalue': values[valueMap.get('ID_WEB_MZ2out')],
			'value': values[valueMap.get('ID_WEB_MZ2out')],
            'name': 'Ausgang "Mischkreis 2 Zu"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_MA2out': {
			'rawvalue': values[valueMap.get('ID_WEB_MA2out')],
			'value': values[valueMap.get('ID_WEB_MA2out')],
            'name': 'Ausgang "Mischkreis 2 Auf"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_Zaehler_BetrZeitVD1': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitVD1')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitVD1')],
            'name': 'Betriebsstunden Verdichter 1',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Zaehler_BetrZeitImpVD1': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitImpVD1')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitImpVD1')],
            'name': 'Impulse Verdichter 1',
            'calculationrule': 'Keine',
            'unit': 'Impulse'
        },
        'ID_WEB_Zaehler_BetrZeitVD2': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitVD2')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitVD2')],
            'name': 'Betriebsstunden Verdichter 2',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Zaehler_BetrZeitImpVD2': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitImpVD2')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitImpVD2')],
            'name': 'Impulse Verdichter 2',
            'calculationrule': 'Keine',
            'unit': 'Impulse'
        },
        'ID_WEB_Zaehler_BetrZeitZWE1': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitZWE1')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitZWE1')],
            'name': 'Betriebsstunden Zweiter Wärmeerzeuger 1',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Zaehler_BetrZeitZWE2': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitZWE2')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitZWE2')],
            'name': 'Betriebsstunden Zweiter Wärmeerzeuger 2',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Zaehler_BetrZeitZWE3': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitZWE3')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitZWE3')],
            'name': 'Betriebsstunden Zweiter Wärmeerzeuger 3',
            'calculationrule': '?? (Wert / 7200 = Stunden)',
            'unit': '??'
        },
        'ID_WEB_Zaehler_BetrZeitWP': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitWP')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitWP')],
            'name': 'Betriebsstunden Wärmepumpe',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Zaehler_BetrZeitHz': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitHz')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitHz')],
            'name': 'Betriebsstunden Heizung',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Zaehler_BetrZeitBW': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitBW')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitBW')],
            'name': 'Betriebsstunden Warmwasser',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Zaehler_BetrZeitKue': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitKue')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitKue')],
            'name': 'Betriebsstunden Kühlung',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_WPein_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_WPein_akt')],
			'value': values[valueMap.get('ID_WEB_Time_WPein_akt')],
            'name': 'Wärmepumpe läuft seit',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_ZWE1_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_ZWE1_akt')],
			'value': values[valueMap.get('ID_WEB_Time_ZWE1_akt')],
            'name': 'Zweiter Wärmeerzeuger 1 läuft seit',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_ZWE2_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_ZWE2_akt')],
			'value': values[valueMap.get('ID_WEB_Time_ZWE2_akt')],
            'name': 'Zweiter Wärmeerzeuger 2 läuft seit',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Timer_EinschVerz': {
			'rawvalue': values[valueMap.get('ID_WEB_Timer_EinschVerz')],
			'value': values[valueMap.get('ID_WEB_Timer_EinschVerz')],
            'name': 'Netzeinschaltverzögerung',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_SSPAUS_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_SSPAUS_akt')],
			'value': values[valueMap.get('ID_WEB_Time_SSPAUS_akt')],
            'name': 'Schaltspielsperre Aus',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_SSPEIN_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_SSPEIN_akt')],
			'value': values[valueMap.get('ID_WEB_Time_SSPEIN_akt')],
            'name': 'Schaltspielsperre Ein',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_VDStd_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_VDStd_akt')],
			'value': values[valueMap.get('ID_WEB_Time_VDStd_akt')],
            'name': 'Verdichter-Standzeit',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_HRM_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_HRM_akt')],
			'value': values[valueMap.get('ID_WEB_Time_HRM_akt')],
            'name': 'Heizungsregler Mehr-Zeit',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_HRW_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_HRW_akt')],
			'value': values[valueMap.get('ID_WEB_Time_HRW_akt')],
            'name': 'Heizungsregler Weniger-Zeit',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_LGS_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_LGS_akt')],
			'value': values[valueMap.get('ID_WEB_Time_LGS_akt')],
            'name': 'Thermische Desinfektion läuft seit',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Time_SBW_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_SBW_akt')],
			'value': values[valueMap.get('ID_WEB_Time_SBW_akt')],
            'name': 'Sperre Warmwasser',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Code_WP_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_Code_WP_akt')],
			'value': values[valueMap.get('ID_WEB_Code_WP_akt')],
            'name': 'Wärmepumpentyp',
            'calculationrule': '0 = ERC;1 = SW1;2 = SW2;3 = WW1;4 = WW2;5 = L1I;6 = L2I;7 = L1A;8 = L2A;9 = KSW;10 = KLW;11 = SWC;12 = LWC;13 = L2G;14 = WZS;15 = L1I407;16 = L2I407;17 = L1A407;18 = L2A407;19 = L2G407;20 = LWC407;21 = L1AREV;22 = L2AREV;23 = WWC1;24 = WWC2;25 = L2G404;26 = WZW;27 = L1S;28 = L1H;29 = L2H;30 = WZWD;31 = ERC;40 = WWB_20;41 = LD5;42 = LD7;43 = SW 37_45;44 = SW 58_69;45 = SW 29_56;46 = LD5 (230V);47 = LD7 (230 V);48 = LD9;49 = LD5 REV;50 = LD7 REV;51 = LD5 REV 230V;52 = LD7 REV 230V;53 = LD9 REV 230V;54 = SW 291;55 = LW SEC;56 = HMD 2;57 = MSW 4;58 = MSW 6;59 = MSW 8;60 = MSW 10;61 = MSW 12;62 = MSW 14;63 = MSW 17;64 = MSW 19;65 = MSW 23;66 = MSW 26;67 = MSW 30;68 = MSW 4S;69 = MSW 6S;70 = MSW 8S;71 = MSW 10S;72 = MSW 13S;73 = MSW 16S;74 = MSW2-6S;75 = MSW4-16;',
            'unit': 'Typenschlüssel'
        },
        'ID_WEB_BIV_Stufe_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_BIV_Stufe_akt')],
			'value': values[valueMap.get('ID_WEB_BIV_Stufe_akt')],
            'name': 'Bivalenzstufe',
            'calculationrule': '1 = ein Verdichter darf laufen ;2 = zwei Verdichter dürfen laufen ;3 = zusätzlicher Wärmeerzeuger darf mitlaufen',
            'unit': ''
        },
        'ID_WEB_WP_BZ_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_WP_BZ_akt')],
			'value': values[valueMap.get('ID_WEB_WP_BZ_akt')],
            'name': 'Betriebszustand',
            'calculationrule': '0 = Heizen;1 = Warmwasser;2 = Schwimmbad / Photovoltaik;3 = EVU;4 = Abtauen;5 = Keine Anforderung;6 = Heizen ext. Energiequelle;7 = Kühlbetrieb',
            'unit': ''
        },
        'ID_WEB_SoftStand1': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand1')],
			'value': values[valueMap.get('ID_WEB_SoftStand1')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII z.B. 86 = V',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand2': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand2')],
			'value': values[valueMap.get('ID_WEB_SoftStand2')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII z.B. 51 = 3',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand3': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand3')],
			'value': values[valueMap.get('ID_WEB_SoftStand3')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII z.B. 46 = .',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand4': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand4')],
			'value': values[valueMap.get('ID_WEB_SoftStand4')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII z.B. 55 = 7',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand5': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand5')],
			'value': values[valueMap.get('ID_WEB_SoftStand5')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII z.B. 56 = 8',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand6': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand6')],
			'value': values[valueMap.get('ID_WEB_SoftStand6')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII 0 = Nichts',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand7': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand7')],
			'value': values[valueMap.get('ID_WEB_SoftStand7')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII 0 = Nichts',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand8': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand8')],
			'value': values[valueMap.get('ID_WEB_SoftStand8')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII 0 = Nichts',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand9': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand9')],
			'value': values[valueMap.get('ID_WEB_SoftStand9')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII 0 = Nichts',
            'unit': 'ASCII'
        },
        'ID_WEB_SoftStand10': {
			'rawvalue': values[valueMap.get('ID_WEB_SoftStand10')],
			'value': values[valueMap.get('ID_WEB_SoftStand10')],
            'name': 'Softwarestand',
            'calculationrule': 'ASCII 0 = Nichts',
            'unit': 'ASCII'
        },
        'ID_WEB_AdresseIP_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_AdresseIP_akt')],
			'value': values[valueMap.get('ID_WEB_AdresseIP_akt')],
            'name': 'IP Adresse',
            'calculationrule': 'siehe Beispielcode unten',
            'unit': 'IP'
        },
        'ID_WEB_SubNetMask_akt': {
			'rawvalue': values[valueMap.get('ID_WEB_SubNetMask_akt')],
			'value': values[valueMap.get('ID_WEB_SubNetMask_akt')],
            'name': 'Subnetzmaske',
            'calculationrule': 'siehe Beispielcode unten',
            'unit': 'IP'
        },
        'ID_WEB_Add_Broadcast': {
			'rawvalue': values[valueMap.get('ID_WEB_Add_Broadcast')],
			'value': values[valueMap.get('ID_WEB_Add_Broadcast')],
            'name': 'Broadcast Adresse',
            'calculationrule': 'siehe Beispielcode unten',
            'unit': 'IP'
        },
        'ID_WEB_Add_StdGateway': {
			'rawvalue': values[valueMap.get('ID_WEB_Add_StdGateway')],
			'value': values[valueMap.get('ID_WEB_Add_StdGateway')],
            'name': 'Standard Gateway',
            'calculationrule': 'siehe Beispielcode unten',
            'unit': 'IP'
        },
        'ID_WEB_ERROR_Time0': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Time0')],
			'value': values[valueMap.get('ID_WEB_ERROR_Time0')],
            'name': 'Zeitstempel Fehler 0 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Timestamp'
        },
        'ID_WEB_ERROR_Time1': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Time1')],
			'value': values[valueMap.get('ID_WEB_ERROR_Time1')],
            'name': 'Zeitstempel Fehler 1 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Timestamp'
        },
        'ID_WEB_ERROR_Time2': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Time2')],
			'value': values[valueMap.get('ID_WEB_ERROR_Time2')],
            'name': 'Zeitstempel Fehler 2 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Timestamp'
        },
        'ID_WEB_ERROR_Time3': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Time3')],
			'value': values[valueMap.get('ID_WEB_ERROR_Time3')],
            'name': 'Zeitstempel Fehler 3 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Timestamp'
        },
        'ID_WEB_ERROR_Time4': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Time4')],
			'value': values[valueMap.get('ID_WEB_ERROR_Time4')],
            'name': 'Zeitstempel Fehler 4 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Timestamp'
        },
        'ID_WEB_ERROR_Nr0': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Nr0')],
			'value': values[valueMap.get('ID_WEB_ERROR_Nr0')],
            'name': 'Fehlercode Fehler 0 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Fehlercode'
        },
        'ID_WEB_ERROR_Nr1': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Nr1')],
			'value': values[valueMap.get('ID_WEB_ERROR_Nr1')],
            'name': 'Fehlercode Fehler 1 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Fehlercode'
        },
        'ID_WEB_ERROR_Nr2': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Nr2')],
			'value': values[valueMap.get('ID_WEB_ERROR_Nr2')],
            'name': 'Fehlercode Fehler 2 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Fehlercode'
        },
        'ID_WEB_ERROR_Nr3': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Nr3')],
			'value': values[valueMap.get('ID_WEB_ERROR_Nr3')],
            'name': 'Fehlercode Fehler 3 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Fehlercode'
        },
        'ID_WEB_ERROR_Nr4': {
			'rawvalue': values[valueMap.get('ID_WEB_ERROR_Nr4')],
			'value': values[valueMap.get('ID_WEB_ERROR_Nr4')],
            'name': 'Fehlercode Fehler 4 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Fehlercode'
        },
        'ID_WEB_AnzahlFehlerInSpeicher': {
			'rawvalue': values[valueMap.get('ID_WEB_AnzahlFehlerInSpeicher')],
			'value': values[valueMap.get('ID_WEB_AnzahlFehlerInSpeicher')],
            'name': 'Anzahl der Fehler im Speicher',
            'calculationrule': 'Keine',
            'unit': ''
        },
        'ID_WEB_Switchoff_file_Nr0': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Nr0')],
			'value': values[valueMap.get('ID_WEB_Switchoff_file_Nr0')],
            'name': 'Grund Abschaltung 0 im Speicher',
            'calculationrule': '1 = Wärmepumpe Störung;2 = Anlagen Störung;3 = Betriebsart Zweiter Wärmeerzeuger;4 = EVU-Sperre;5 = Lauftabtau (nur LW-Geräte);6 = Temperatur Einsatzgrenze maximal;7 = Temperatur Einsatzgrenze minimal (bei LWD reversibel möglicherweise Abschaltung wegen Frostschutz bei Kühlbetrieb - Verdampfungstemperatur zu lange unter 0°C);8 = Untere Einsatzgrenze;9 = Keine Anforderung ',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff_file_Nr1': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Nr1')],
			'value': values[valueMap.get('ID_WEB_Switchoff_file_Nr1')],
            'name': 'Grund Abschaltung 1 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff_file_Nr2': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Nr2')],
			'value': values[valueMap.get('ID_WEB_Switchoff_file_Nr2')],
            'name': 'Grund Abschaltung 2 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff_file_Nr3': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Nr3')],
			'value': values[valueMap.get('ID_WEB_Switchoff_file_Nr3')],
            'name': 'Grund Abschaltung 3 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff_file_Nr4': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Nr4')],
			'value': values[valueMap.get('ID_WEB_Switchoff_file_Nr4')],
            'name': 'Grund Abschaltung 4 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff_file_Time0': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Time0')],
			'value': new Date(values[valueMap.get('ID_WEB_Switchoff_file_Time0')] * 1000).toUTCString(),
            'name': 'Zeitstempel Abschaltung 0 im Speicher',
            'calculationrule': 'Keine',
            'unit': ''
        },
        'ID_WEB_Switchoff_file_Time1': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Time1')],
			'value': new Date(values[valueMap.get('ID_WEB_Switchoff_file_Time1')] * 1000).toUTCString(),
            'name': 'Zeitstempel Abschaltung 1 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Switchoff_file_Time2': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Time2')],
			'value': new Date(values[valueMap.get('ID_WEB_Switchoff_file_Time2')] * 1000).toUTCString(),
            'name': 'Zeitstempel Abschaltung 2 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Switchoff_file_Time3': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Time3')],
			'value': new Date(values[valueMap.get('ID_WEB_Switchoff_file_Time3')] * 1000).toUTCString(),
            'name': 'Zeitstempel Abschaltung 3 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Switchoff_file_Time4': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff_file_Time4')],
			'value': new Date(values[valueMap.get('ID_WEB_Switchoff_file_Time4')] * 1000).toUTCString(),
            'name': 'Zeitstempel Abschaltung 4 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Comfort_exists': {
			'rawvalue': values[valueMap.get('ID_WEB_Comfort_exists')],
			'value': values[valueMap.get('ID_WEB_Comfort_exists')],
            'name': 'Comfort Platine installiert',
            'calculationrule': '0 = nicht verbaut;1 = verbaut ',
            'unit': 'Boolean'
        },
        'ID_WEB_HauptMenuStatus_Zeile1': {
			'rawvalue': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeile1')],
			'value': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeile1')],
            'name': 'Status Zeile 1',
            'calculationrule': '0 = Wärmepumpe läuft;1 = Wärmepumpe steht;2 = Wärmepumpe kommt;3 = Fehlercode Speicherplatz 0;4 = Abtauen;5 = Warte auf LIN-Verbindung;6 = Verdichter heizt auf;7 = Pumpenvorlauf',
            'unit': 'Statuscode'
        },
        'ID_WEB_HauptMenuStatus_Zeile2': {
			'rawvalue': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeile2')],
			'value': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeile2')],
            'name': 'Status Zeile 2',
            'calculationrule': '0 = seit :;1 = in : ',
            'unit': 'Statustext'
        },
        'ID_WEB_HauptMenuStatus_Zeile3': {
			'rawvalue': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeile3')],
			'value': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeile3')],
            'name': 'Status Zeile 3',
            'calculationrule': '0 = Heizbetrieb;1 = Keine Anforderung;2 = Netz-Einschaltverzögerung;3 = Schaltspielsperre;4 = Sperrzeit;5 = Brauchwasser;6 = Info Ausheizprogramm;7 = Abtauen;8 = Pumpenvorlauf;9 = Thermische Desinfektion;10 = Kühlbetrieb;12 = Schwimmbad / Photovoltaik;13 = Heizen ext. Energiequelle ;14 = Brauchwasser ext. Energiequelle;16 = Durchflussüberachung;17 = Zweiter Wärmeerzeuger 1 Betrieb ',
            'unit': 'Statuscode'
        },
        'ID_WEB_HauptMenuStatus_Zeit': {
			'rawvalue': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeit')],
			'value': values[valueMap.get('ID_WEB_HauptMenuStatus_Zeit')],
            'name': 'Zeit seit / in (in kombination mit #118)',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_HauptMenuAHP_Stufe': {
			'rawvalue': values[valueMap.get('ID_WEB_HauptMenuAHP_Stufe')],
			'value': values[valueMap.get('ID_WEB_HauptMenuAHP_Stufe')],
            'name': 'Stufe Ausheizprogramm',
            'calculationrule': 'Keine',
            'unit': ''
        },
        'ID_WEB_HauptMenuAHP_Temp': {
			'rawvalue': values[valueMap.get('ID_WEB_HauptMenuAHP_Temp')],
			'value': values[valueMap.get('ID_WEB_HauptMenuAHP_Temp')],
            'name': 'Temperatur Ausheizprogramm',
            'calculationrule': 'Wert * 0.1',
            'unit': '°C'
        },
        'ID_WEB_HauptMenuAHP_Zeit': {
			'rawvalue': values[valueMap.get('ID_WEB_HauptMenuAHP_Zeit')],
			'value': values[valueMap.get('ID_WEB_HauptMenuAHP_Zeit')],
            'name': 'Laufzeit Ausheizprogramm',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_SH_BWW': {
			'rawvalue': values[valueMap.get('ID_WEB_SH_BWW')],
			'value': values[valueMap.get('ID_WEB_SH_BWW')],
            'name': 'Brauchwasser aktiv/inaktiv Symbol',
            'calculationrule': '0 = inaktiv;1 = aktiv',
            'unit': 'Boolean'
        },
        'ID_WEB_SH_HZ': {
			'rawvalue': values[valueMap.get('ID_WEB_SH_HZ')],
			'value': values[valueMap.get('ID_WEB_SH_HZ')],
            'name': 'Heizung Symbol',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_SH_MK1': {
			'rawvalue': values[valueMap.get('ID_WEB_SH_MK1')],
			'value': values[valueMap.get('ID_WEB_SH_MK1')],
            'name': 'Mischkreis 1 Symbol',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_SH_MK2': {
			'rawvalue': values[valueMap.get('ID_WEB_SH_MK2')],
			'value': values[valueMap.get('ID_WEB_SH_MK2')],
            'name': 'Mischkreis 2 Symbol',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_Einst_Kurzrpgramm': {
			'rawvalue': values[valueMap.get('ID_WEB_Einst_Kurzrpgramm')],
			'value': values[valueMap.get('ID_WEB_Einst_Kurzrpgramm')],
            'name': 'Einstellung Kurzprogramm',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_StatusSlave_1': {
			'rawvalue': values[valueMap.get('ID_WEB_StatusSlave_1')],
			'value': values[valueMap.get('ID_WEB_StatusSlave_1')],
            'name': 'Status Slave 1',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_StatusSlave_2': {
			'rawvalue': values[valueMap.get('ID_WEB_StatusSlave_2')],
			'value': values[valueMap.get('ID_WEB_StatusSlave_2')],
            'name': 'Status Slave 2',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_StatusSlave_3': {
			'rawvalue': values[valueMap.get('ID_WEB_StatusSlave_3')],
			'value': values[valueMap.get('ID_WEB_StatusSlave_3')],
            'name': 'Status Slave 3',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_StatusSlave_4': {
			'rawvalue': values[valueMap.get('ID_WEB_StatusSlave_4')],
			'value': values[valueMap.get('ID_WEB_StatusSlave_4')],
            'name': 'Status Slave 4',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_StatusSlave_5': {
			'rawvalue': values[valueMap.get('ID_WEB_StatusSlave_5')],
			'value': values[valueMap.get('ID_WEB_StatusSlave_5')],
            'name': 'Status Slave 5',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_AktuelleTimeStamp': {
			'rawvalue': values[valueMap.get('ID_WEB_AktuelleTimeStamp')],
			'value': values[valueMap.get('ID_WEB_AktuelleTimeStamp')],
            'name': 'Aktuelle Zeit der Wärmepumpe',
            'calculationrule': 'Keine',
            'unit': 'Unix Timestamp'
        },
        'ID_WEB_SH_MK3': {
			'rawvalue': values[valueMap.get('ID_WEB_SH_MK3')],
			'value': values[valueMap.get('ID_WEB_SH_MK3')],
            'name': 'Mischkreis 3 Symbol',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_Sollwert_TVL_MK3': {
			'rawvalue': values[valueMap.get('ID_WEB_Sollwert_TVL_MK3')],
			'value': values[valueMap.get('ID_WEB_Sollwert_TVL_MK3')] / 10,
            'name': 'Mischkreis 3 Vorlauf-Soll-Temperatur',
            'calculationrule': 'Wert * 0.1',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TFB3': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TFB3')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TFB3')] / 10,
            'name': 'Mischkreis 3 Vorlauftemperatur',
            'calculationrule': 'Wert * 0.1',
            'unit': '°C'
        },
        'ID_WEB_MZ3out': {
			'rawvalue': values[valueMap.get('ID_WEB_MZ3out')],
			'value': values[valueMap.get('ID_WEB_MZ3out')],
            'name': 'Ausgang "Mischkreis 3 Zu"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_MA3out': {
			'rawvalue': values[valueMap.get('ID_WEB_MA3out')],
			'value': values[valueMap.get('ID_WEB_MA3out')],
            'name': 'Ausgang "Mischkreis 3 Auf"',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_FP3out': {
			'rawvalue': values[valueMap.get('ID_WEB_FP3out')],
			'value': values[valueMap.get('ID_WEB_FP3out')],
            'name': 'Pumpe Mischkreis 3',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_Time_AbtIn': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_AbtIn')],
			'value': values[valueMap.get('ID_WEB_Time_AbtIn')],
            'name': 'Zeit bis Abtauen',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Temperatur_RFV2': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_RFV2')],
			'value': values[valueMap.get('ID_WEB_Temperatur_RFV2')] / 10,
            'name': 'Raumtemperatur Raumstation 2',
            'calculationrule': 'Wert * 0.1',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_RFV3': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_RFV3')],
			'value': values[valueMap.get('ID_WEB_Temperatur_RFV3')] / 10,
            'name': 'Raumtemperatur Raumstation 3',
            'calculationrule': 'Wert * 0.1',
            'unit': '°C'
        },
        'ID_WEB_SH_SW': {
			'rawvalue': values[valueMap.get('ID_WEB_SH_SW')],
			'value': values[valueMap.get('ID_WEB_SH_SW')],
            'name': 'Schaltuhr Schwimmbad Symbol',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_Zaehler_BetrZeitSW': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitSW')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitSW')],
            'name': 'Betriebsstunden Schwimmbad',
            'calculationrule': '?? (Wert / 7200 = Stunden)',
            'unit': '??'
        },
        'ID_WEB_FreigabKuehl': {
			'rawvalue': values[valueMap.get('ID_WEB_FreigabKuehl')],
			'value': values[valueMap.get('ID_WEB_FreigabKuehl')],
            'name': 'Freigabe Kühlung',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_AnalogIn': {
			'rawvalue': values[valueMap.get('ID_WEB_AnalogIn')],
			'value': values[valueMap.get('ID_WEB_AnalogIn')] / 100,
            'name': 'Analoges Eingangssignal',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_SonderZeichen': {
			'rawvalue': values[valueMap.get('ID_WEB_SonderZeichen')],
			'value': values[valueMap.get('ID_WEB_SonderZeichen')],
            'name': '??',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_SH_ZIP': {
			'rawvalue': values[valueMap.get('ID_WEB_SH_ZIP')],
			'value': values[valueMap.get('ID_WEB_SH_ZIP')],
            'name': 'Zirkulationspumpen Symbol',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_WebsrvProgrammWerteBeobarten': {
			'rawvalue': values[valueMap.get('ID_WEB_WebsrvProgrammWerteBeobarten')],
			'value': values[valueMap.get('ID_WEB_WebsrvProgrammWerteBeobarten')],
            'name': '??',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_WMZ_Heizung': {
			'rawvalue': values[valueMap.get('ID_WEB_WMZ_Heizung')],
			'value': values[valueMap.get('ID_WEB_WMZ_Heizung')] / 10,
            'name': 'Wärmemengenzähler Heizung',
            'calculationrule': 'rawvalue / 10',
            'unit': 'kWh'
        },
        'ID_WEB_WMZ_Brauchwasser': {
			'rawvalue': values[valueMap.get('ID_WEB_WMZ_Brauchwasser')],
			'value': values[valueMap.get('ID_WEB_WMZ_Brauchwasser')] / 10,
            'name': 'Wärmemengenzähler Brauchwasser',
            'calculationrule': 'rawvalue / 10',
            'unit': 'kWh'
        },
        'ID_WEB_WMZ_Schwimmbad': {
			'rawvalue': values[valueMap.get('ID_WEB_WMZ_Schwimmbad')],
			'value': values[valueMap.get('ID_WEB_WMZ_Schwimmbad')] / 10,
            'name': 'Wärmemengenzähler Schwimmbad',
            'calculationrule': 'rawvalue / 10',
            'unit': 'kWh'
        },
        'ID_WEB_WMZ_Seit': {
			'rawvalue': values[valueMap.get('ID_WEB_WMZ_Seit')],
			'value': values[valueMap.get('ID_WEB_WMZ_Seit')] / 10,
            'name': 'Wärmemengenzähler Gesamt',
            'calculationrule': 'rawvalue / 10',
            'unit': 'kWh'
        },
        'ID_WEB_WMZ_Durchfluss': {
			'rawvalue': values[valueMap.get('ID_WEB_WMZ_Durchfluss')],
			'value': values[valueMap.get('ID_WEB_WMZ_Durchfluss')],
            'name': 'Wärmemengenzähler Durchfluss',
            'calculationrule': 'Keine',
            'unit': 'l / h'
        },
        'ID_WEB_AnalogOut1': {
			'rawvalue': values[valueMap.get('ID_WEB_AnalogOut1')],
			'value': values[valueMap.get('ID_WEB_AnalogOut1')] / 100,
            'name': 'Analog Ausgang 1',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_AnalogOut2': {
			'rawvalue': values[valueMap.get('ID_WEB_AnalogOut2')],
			'value': values[valueMap.get('ID_WEB_AnalogOut2')] / 100,
            'name': 'Analog Ausgang 2',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_Time_Heissgas': {
			'rawvalue': values[valueMap.get('ID_WEB_Time_Heissgas')],
			'value': values[valueMap.get('ID_WEB_Time_Heissgas')],
            'name': 'Sperre zweiter Verdichter Heissgas',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_Temp_Lueftung_Zuluft': {
			'rawvalue': values[valueMap.get('ID_WEB_Temp_Lueftung_Zuluft')],
			'value': values[valueMap.get('ID_WEB_Temp_Lueftung_Zuluft')] / 10,
            'name': 'Zulufttemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temp_Lueftung_Abluft': {
			'rawvalue': values[valueMap.get('ID_WEB_Temp_Lueftung_Abluft')],
			'value': values[valueMap.get('ID_WEB_Temp_Lueftung_Abluft')] / 10,
            'name': 'Ablufttemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Zaehler_BetrZeitSolar': {
			'rawvalue': values[valueMap.get('ID_WEB_Zaehler_BetrZeitSolar')],
			'value': values[valueMap.get('ID_WEB_Zaehler_BetrZeitSolar')],
            'name': 'Betriebstundenzähler Solar  ',
            'calculationrule': 'Keine',
            'unit': 'Sekunden'
        },
        'ID_WEB_AnalogOut3': {
			'rawvalue': values[valueMap.get('ID_WEB_AnalogOut3')],
			'value': values[valueMap.get('ID_WEB_AnalogOut3')] / 100,
            'name': 'Analog Ausgang 3',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_AnalogOut4': {
			'rawvalue': values[valueMap.get('ID_WEB_AnalogOut4')],
			'value': values[valueMap.get('ID_WEB_AnalogOut4')] / 100,
            'name': 'Analog Ausgang 4',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_Out_VZU': {
			'rawvalue': values[valueMap.get('ID_WEB_Out_VZU')],
			'value': values[valueMap.get('ID_WEB_Out_VZU')] / 100,
            'name': 'Zuluft Ventilator (Abtaufunktion)',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_Out_VAB': {
			'rawvalue': values[valueMap.get('ID_WEB_Out_VAB')],
			'value': values[valueMap.get('ID_WEB_Out_VAB')] / 100,
            'name': 'Abluft Ventilator',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_Out_VSK': {
			'rawvalue': values[valueMap.get('ID_WEB_Out_VSK')],
			'value': values[valueMap.get('ID_WEB_Out_VSK')],
            'name': 'Ausgang VSK',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_Out_FRH': {
			'rawvalue': values[valueMap.get('ID_WEB_Out_FRH')],
			'value': values[valueMap.get('ID_WEB_Out_FRH')],
            'name': 'Ausgang FRH',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_AnalogIn2': {
			'rawvalue': values[valueMap.get('ID_WEB_AnalogIn2')],
			'value': values[valueMap.get('ID_WEB_AnalogIn2')] / 100,
            'name': 'Analog Eingang 2',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_AnalogIn3': {
			'rawvalue': values[valueMap.get('ID_WEB_AnalogIn3')],
			'value': values[valueMap.get('ID_WEB_AnalogIn3')] / 100,
            'name': 'Analog Eingang 3',
            'calculationrule': 'rawvalue / 100',
            'unit': 'V'
        },
        'ID_WEB_SAXin': {
			'rawvalue': values[valueMap.get('ID_WEB_SAXin')],
			'value': values[valueMap.get('ID_WEB_SAXin')],
            'name': 'Eingang SAX',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_SPLin': {
			'rawvalue': values[valueMap.get('ID_WEB_SPLin')],
			'value': values[valueMap.get('ID_WEB_SPLin')],
            'name': 'Eingang SPL',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_Compact_exists': {
			'rawvalue': values[valueMap.get('ID_WEB_Compact_exists')],
			'value': values[valueMap.get('ID_WEB_Compact_exists')],
            'name': 'Lüftungsplatine verbaut',
            'calculationrule': '0 = nicht verbaut;1 = verbaut',
            'unit': 'Boolean'
        },
        'ID_WEB_Durchfluss_WQ': {
			'rawvalue': values[valueMap.get('ID_WEB_Durchfluss_WQ')],
			'value': values[valueMap.get('ID_WEB_Durchfluss_WQ')],
            'name': 'Durchfluss Wärmequelle',
            'calculationrule': 'Keine',
            'unit': 'l / h'
        },
        'ID_WEB_LIN_exists': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_exists')],
			'value': values[valueMap.get('ID_WEB_LIN_exists')],
            'name': 'LIN BUS verbaut',
            'calculationrule': '0 = nicht verbaut;1 = verbaut',
            'unit': 'Boolean'
        },
        'ID_WEB_LIN_ANSAUG_VERDAMPFER': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDAMPFER')],
			'value': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDAMPFER')] / 10,
            'name': 'Temperatur Ansaug Verdampfer',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_LIN_ANSAUG_VERDICHTER': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDICHTER')],
			'value': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDICHTER')] / 10,
            'name': 'Temperatur Ansaug Verdichter',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_LIN_VDH': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_VDH')],
			'value': values[valueMap.get('ID_WEB_LIN_VDH')] / 10,
            'name': 'Temperatur Verdichter Heizung',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_LIN_UH': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_UH')],
			'value': values[valueMap.get('ID_WEB_LIN_UH')] / 10,
            'name': 'Überhitzung',
            'calculationrule': 'rawvalue / 10',
            'unit': 'K'
        },
        'ID_WEB_LIN_UH_Soll': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_UH_Soll')],
			'value': values[valueMap.get('ID_WEB_LIN_UH_Soll')] / 10,
            'name': 'Überhitzung Soll ',
            'calculationrule': 'rawvalue / 10',
            'unit': 'K'
        },
        'ID_WEB_LIN_HD': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_HD')],
			'value': values[valueMap.get('ID_WEB_LIN_HD')] / 100,
            'name': 'Hochdruck',
            'calculationrule': 'rawvalue / 100',
            'unit': 'bar'
        },
        'ID_WEB_LIN_ND': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_ND')],
			'value': values[valueMap.get('ID_WEB_LIN_ND')] / 100,
            'name': 'Niederdruck',
            'calculationrule': 'rawvalue / 100',
            'unit': 'bar'
        },
        'ID_WEB_LIN_VDH_out': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_VDH_out')],
			'value': values[valueMap.get('ID_WEB_LIN_VDH_out')],
            'name': 'Ausgang Verdichterheizung',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_HZIO_PWM': {
			'rawvalue': values[valueMap.get('ID_WEB_HZIO_PWM')],
			'value': values[valueMap.get('ID_WEB_HZIO_PWM')] / 10,
            'name': 'Steuersignal Umwälzpumpe',
            'calculationrule': 'rawvalue / 10',
            'unit': '%'
        },
        'ID_WEB_HZIO_VEN': {
			'rawvalue': values[valueMap.get('ID_WEB_HZIO_VEN')],
			'value': values[valueMap.get('ID_WEB_HZIO_VEN')],
            'name': 'Ventilator Drehzahl',
            'calculationrule': 'Keine',
            'unit': 'U / min'
        },
        'ID_WEB_HZIO_EVU2': {
			'rawvalue': values[valueMap.get('ID_WEB_HZIO_EVU2')],
			'value': values[valueMap.get('ID_WEB_HZIO_EVU2')],
            'name': 'EVU 2',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_HZIO_STB': {
			'rawvalue': values[valueMap.get('ID_WEB_HZIO_STB')],
			'value': values[valueMap.get('ID_WEB_HZIO_STB')],
            'name': 'Sicherheits-Tempeartur-Begrenzer Fussbodenheizung',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_SEC_Qh_Soll': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_Qh_Soll')],
			'value': values[valueMap.get('ID_WEB_SEC_Qh_Soll')] / 100,
            'name': 'Leistung Sollwert',
            'calculationrule': 'rawvalue / 100',
            'unit': 'kWh'
        },
        'ID_WEB_SEC_Qh_Ist': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_Qh_Ist')],
			'value': values[valueMap.get('ID_WEB_SEC_Qh_Ist')] / 100,
            'name': 'Leistung Istwert',
            'calculationrule': 'rawvalue / 100',
            'unit': 'kWh'
        },
        'ID_WEB_SEC_TVL_Soll': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_TVL_Soll')],
			'value': values[valueMap.get('ID_WEB_SEC_TVL_Soll')] / 10,
            'name': 'Temperatur Vorlauf Soll',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_SEC_Software': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_Software')],
			'value': values[valueMap.get('ID_WEB_SEC_Software')],
            'name': 'Software Stand SEC Board',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_SEC_BZ': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_BZ')],
			'value': values[valueMap.get('ID_WEB_SEC_BZ')],
            'name': 'Betriebszustand SEC Board',
            'calculationrule': '0 = Aus;1 = Kühlung;2 = Heizung;3 = Störung;4 = Übergang;5 = Abtauen;6 = Warte;7 = Warte;8 = Übergang;9 = Stop;10 = Manuell ;11 = Simulation Start;12 = EVU Sperre ',
            'unit': 'Betriebszustand'
        },
        'ID_WEB_SEC_VWV': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_VWV')],
			'value': values[valueMap.get('ID_WEB_SEC_VWV')],
            'name': 'Vierwegeventil',
            'calculationrule': '??',
            'unit': '??'
        },
        'ID_WEB_SEC_VD': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_VD')],
			'value': values[valueMap.get('ID_WEB_SEC_VD')],
            'name': 'Verdichterdrehzahl',
            'calculationrule': 'Keine',
            'unit': 'U / min'
        },
        'ID_WEB_SEC_VerdEVI': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_VerdEVI')],
			'value': values[valueMap.get('ID_WEB_SEC_VerdEVI')] / 10,
            'name': 'Verdichtertemperatur EVI (Enhanced Vapour Injection)',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_SEC_AnsEVI': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_AnsEVI')],
			'value': values[valueMap.get('ID_WEB_SEC_AnsEVI')] / 10,
            'name': 'Ansaugtemperatur EVI',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_SEC_UEH_EVI': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_UEH_EVI')],
			'value': values[valueMap.get('ID_WEB_SEC_UEH_EVI')] / 10,
            'name': 'Überhitzung EVI',
            'calculationrule': 'rawvalue / 10',
            'unit': 'K'
        },
        'ID_WEB_SEC_UEH_EVI_S': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_UEH_EVI_S')],
			'value': values[valueMap.get('ID_WEB_SEC_UEH_EVI_S')] / 10,
            'name': 'Überhitzung EVI Sollwert',
            'calculationrule': 'rawvalue / 10',
            'unit': 'K'
        },
        'ID_WEB_SEC_KondTemp': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_KondTemp')],
			'value': values[valueMap.get('ID_WEB_SEC_KondTemp')] / 10,
            'name': 'Kondensationstemperatur',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_SEC_FlussigEx': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_FlussigEx')],
			'value': values[valueMap.get('ID_WEB_SEC_FlussigEx')] / 10,
            'name': 'Flüssigtemperatur EEV (elektronisches Expansionsventil)',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_SEC_UK_EEV': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_UK_EEV')],
			'value': values[valueMap.get('ID_WEB_SEC_UK_EEV')] / 10,
            'name': 'Unterkühlung EEV',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_SEC_EVI_Druck': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_EVI_Druck')],
			'value': values[valueMap.get('ID_WEB_SEC_EVI_Druck')] / 100,
            'name': 'Druck EVI',
            'calculationrule': 'rawvalue / 100',
            'unit': 'bar'
        },
        'ID_WEB_SEC_U_Inv': {
			'rawvalue': values[valueMap.get('ID_WEB_SEC_U_Inv')],
			'value': values[valueMap.get('ID_WEB_SEC_U_Inv')] / 10,
            'name': 'Spannung Inverter',
            'calculationrule': 'rawvalue / 10',
            'unit': 'V'
        },
        'ID_WEB_Temperatur_THG_2': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_THG_2')],
			'value': values[valueMap.get('ID_WEB_Temperatur_THG_2')] / 10,
            'name': 'Temperarturfühler Heissgas 2',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_TWE_2': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_TWE_2')],
			'value': values[valueMap.get('ID_WEB_Temperatur_TWE_2')] / 10,
            'name': 'Temperaturfühler Wärmequelleneintritt 2',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_LIN_ANSAUG_VERDAMPFER_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDAMPFER_2')],
			'value': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDAMPFER_2')] / 10,
            'name': 'Ansaugtemperatur Verdampfer 2',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_LIN_ANSAUG_VERDICHTER_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDICHTER_2')],
			'value': values[valueMap.get('ID_WEB_LIN_ANSAUG_VERDICHTER_2')] / 10,
            'name': 'Ansaugtemperatur Verdichter 2',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_LIN_VDH_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_VDH_2')],
			'value': values[valueMap.get('ID_WEB_LIN_VDH_2')] / 10,
            'name': 'Temperatur Verdichter 2 Heizung',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_LIN_UH_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_UH_2')],
			'value': values[valueMap.get('ID_WEB_LIN_UH_2')] / 10,
            'name': 'Überhitzung 2',
            'calculationrule': 'rawvalue / 10',
            'unit': 'K'
        },
        'ID_WEB_LIN_UH_Soll_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_UH_Soll_2')],
			'value': values[valueMap.get('ID_WEB_LIN_UH_Soll_2')] / 10,
            'name': 'Überhitzung Soll 2',
            'calculationrule': 'rawvalue / 10',
            'unit': 'K'
        },
        'ID_WEB_LIN_HD_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_HD_2')],
			'value': values[valueMap.get('ID_WEB_LIN_HD_2')] / 100,
            'name': 'Hochdruck 2',
            'calculationrule': 'rawvalue / 100',
            'unit': 'bar'
        },
        'ID_WEB_LIN_ND_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_ND_2')],
			'value': values[valueMap.get('ID_WEB_LIN_ND_2')] / 100,
            'name': 'Niederdruck 2',
            'calculationrule': 'rawvalue / 100',
            'unit': 'bar'
        },
        'ID_WEB_HDin_2': {
			'rawvalue': values[valueMap.get('ID_WEB_HDin_2')],
			'value': values[valueMap.get('ID_WEB_HDin_2')],
            'name': 'Eingang Druckschalter Hochdruck 2',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_AVout_2': {
			'rawvalue': values[valueMap.get('ID_WEB_AVout_2')],
			'value': values[valueMap.get('ID_WEB_AVout_2')],
            'name': 'Ausgang Abtauventil 2',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_VBOout_2': {
			'rawvalue': values[valueMap.get('ID_WEB_VBOout_2')],
			'value': values[valueMap.get('ID_WEB_VBOout_2')],
            'name': 'Ausgang Solepumpe/Ventilator 2',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_VD1out_2': {
			'rawvalue': values[valueMap.get('ID_WEB_VD1out_2')],
			'value': values[valueMap.get('ID_WEB_VD1out_2')],
            'name': 'Ausgang Verdichter 1 / 2',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_LIN_VDH_out_2': {
			'rawvalue': values[valueMap.get('ID_WEB_LIN_VDH_out_2')],
			'value': values[valueMap.get('ID_WEB_LIN_VDH_out_2')],
            'name': 'Ausgang Verdichter Heizung 2',
            'calculationrule': 'Keine',
            'unit': 'Boolean'
        },
        'ID_WEB_Switchoff2_file_Nr0': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file_Nr0')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file_Nr0')],
            'name': 'Grund Abschaltung 0 im Speicher',
            'calculationrule': '1 = Wärmepumpe Störung;2 = Anlagen Störung;3 = Betriebsart Zweiter Wärmeerzeuger;4 = EVU-Sperre;5 = Lauftabtau (nur LW-Geräte);6 = Temperatur Einsatzgrenze maximal;7 = Temperatur Einsatzgrenze minimal (bei LWD reversibel möglicherweise Abschaltung wegen Frostschutz bei Kühlbetrieb - Verdampfungstemperatur zu lange unter 0°C);8 = Untere Einsatzgrenze;9 = Keine Anforderung',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff2_file2_Nr1': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr1')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr1')],
            'name': 'Grund Abschaltung 1 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff2_file2_Nr2': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr2')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr2')],
            'name': 'Grund Abschaltung 2 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff2_file2_Nr3': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr3')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr3')],
            'name': 'Grund Abschaltung 3 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff2_file2_Nr4': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr4')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file2_Nr4')],
            'name': 'Grund Abschaltung 4 im Speicher',
            'calculationrule': 'siehe Abschaltcode 0',
            'unit': 'Abschaltcode'
        },
        'ID_WEB_Switchoff2_file_Time0': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file_Time0')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file_Time0')],
            'name': 'Zeitstempel Abschaltung 0 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Switchoff2_file_Time1': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file_Time1')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file_Time1')],
            'name': 'Zeitstempel Abschaltung 1 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Switchoff2_file_Time2': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file_Time2')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file_Time2')],
            'name': 'Zeitstempel Abschaltung 2 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Switchoff2_file_Time3': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file_Time3')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file_Time3')],
            'name': 'Zeitstempel Abschaltung 3 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_Switchoff2_file_Time4': {
			'rawvalue': values[valueMap.get('ID_WEB_Switchoff2_file_Time4')],
			'value': values[valueMap.get('ID_WEB_Switchoff2_file_Time4')],
            'name': 'Zeitstempel Abschaltung 4 im Speicher',
            'calculationrule': 'Keine',
            'unit': 'Unix Zeitstempel'
        },
        'ID_WEB_RBE_RT_Ist': {
			'rawvalue': values[valueMap.get('ID_WEB_RBE_RT_Ist')],
			'value': values[valueMap.get('ID_WEB_RBE_RT_Ist')] / 10,
            'name': 'Raumtemperatur Istwert',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_RBE_RT_Soll': {
			'rawvalue': values[valueMap.get('ID_WEB_RBE_RT_Soll')],
			'value': values[valueMap.get('ID_WEB_RBE_RT_Soll')] / 10,
            'name': 'Raumtemperatur Sollwert',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Temperatur_BW_oben': {
			'rawvalue': values[valueMap.get('ID_WEB_Temperatur_BW_oben')],
			'value': values[valueMap.get('ID_WEB_Temperatur_BW_oben')] / 10,
            'name': 'Temperatur Brauchwasser Oben',
            'calculationrule': 'rawvalue / 10',
            'unit': '°C'
        },
        'ID_WEB_Code_WP_akt_2': {
			'rawvalue': values[valueMap.get('ID_WEB_Code_WP_akt_2')],
			'value': values[valueMap.get('ID_WEB_Code_WP_akt_2')],
            'name': 'Wärmepumpen Typ 2',
            'calculationrule': '0 = ERC;1 = SW1;2 = SW2;3 = WW1;4 = WW2;5 = L1I;6 = L2I;7 = L1A;8 = L2A;9 = KSW;10 = KLW;11 = SWC;12 = LWC;13 = L2G;14 = WZS;15 = L1I407;16 = L2I407;17 = L1A407;18 = L2A407;19 = L2G407;20 = LWC407;21 = L1AREV;22 = L2AREV;23 = WWC1;24 = WWC2;25 = L2G404;26 = WZW;27 = L1S;28 = L1H;29 = L2H;30 = WZWD;31 = ERC;40 = WWB_20;41 = LD5;42 = LD7;43 = SW 37_45;44 = SW 58_69;45 = SW 29_56;46 = LD5 (230V);47 = LD7 (230 V);48 = LD9;49 = LD5 REV;50 = LD7 REV;51 = LD5 REV 230V;52 = LD7 REV 230V;53 = LD9 REV 230V;54 = SW 291;55 = LW SEC;56 = HMD 2;57 = MSW 4;58 = MSW 6;59 = MSW 8;60 = MSW 10;61 = MSW 12;62 = MSW 14;63 = MSW 17;64 = MSW 19;65 = MSW 23;66 = MSW 26;67 = MSW 30;68 = MSW 4S;69 = MSW 6S;70 = MSW 8S;71 = MSW 10S;72 = MSW 13S;73 = MSW 16S;74 = MSW2-6S;75 = MSW4-16',
            'unit': 'Typenschlüssel'
        },
        'ID_WEB_Freq_VD': {
			'rawvalue': values[valueMap.get('ID_WEB_Freq_VD')],
			'value': values[valueMap.get('ID_WEB_Freq_VD')],
            'name': 'Verdichterfrequenz',
            'calculationrule': 'Keine',
            'unit': 'Hz'
        },
    };
}

function getDeprecatedValues(heatpumpValues, heatpumpVisibility) {
    return {
        'temperature_supply': heatpumpValues[10] / 10, // #15
        'temperature_return': heatpumpValues[11] / 10, // #16
        'temperature_target_return': heatpumpValues[12] / 10, // #17
        'temperature_extern_return': (heatpumpVisibility[24] === 1) ? heatpumpValues[13] / 10 : 'no', // #18
        'temperature_hot_gas': heatpumpValues[14] / 10, // #26
        'temperature_outside': heatpumpValues[15] / 10, // #12
        'temperature_outside_avg': heatpumpValues[16] / 10, // #13
        'temperature_hot_water': heatpumpValues[17] / 10, // #14
        'temperature_hot_water_target': heatpumpValues[18] / 10, // #25
        'temperature_heat_source_in': heatpumpValues[19] / 10, // #23
        'temperature_heat_source_out': heatpumpValues[20] / 10, // #24
        'temperature_mixer1_flow': (heatpumpVisibility[31] === 1) ? heatpumpValues[21] / 10 : 'no', // #55
        'temperature_mixer1_target': (heatpumpVisibility[32] === 1) ? heatpumpValues[22] / 10 : 'no', // #56
        'temperaturw_RFV': (heatpumpVisibility[33] === 1) ? heatpumpValues[23] / 10 : 'no',
        'temperature_mixer2_flow': (heatpumpVisibility[34] === 1) ? heatpumpValues[24] / 10 : 'no', // #57
        'temperature_mixer2_target': (heatpumpVisibility[35] === 1) ? heatpumpValues[25] / 10 : 'no', // #48
        'temperature_solar_collector': (heatpumpVisibility[36] === 1) ? heatpumpValues[26] / 10 : 'no', // #50
        'temperature_solar_storage': (heatpumpVisibility[37] === 1) ? heatpumpValues[27] / 10 : 'no', // #51
        'temperature_external_source': (heatpumpVisibility[38] === 1) ? heatpumpValues[28] / 10 : 'no',

        'ASDin': heatpumpValues[29],
        'BWTin': heatpumpValues[30],
        'EVUin': heatpumpValues[31],
        'HDin': heatpumpValues[32],
        'MOTin': heatpumpValues[33],
        'NDin': heatpumpValues[34],
        'PEXin': heatpumpValues[35],
        'SWTin': heatpumpValues[36],

        'AVout': heatpumpValues[37],
        'BUPout': heatpumpValues[38],
        'HUPout': heatpumpValues[39],
        'MA1out': heatpumpValues[40],
        'MZ1out': heatpumpValues[41],
        'VENout': heatpumpValues[42],
        'VBOout': heatpumpValues[43],
        'VD1out': heatpumpValues[44],
        'VD2out': heatpumpValues[45],
        'ZIPout': heatpumpValues[46],
        'ZUPout': heatpumpValues[47],
        'ZW1out': heatpumpValues[48],
        'ZW2SSTout': heatpumpValues[49],
        'ZW3SSTout': heatpumpValues[50],
        'FP2out': heatpumpValues[51],
        'SLPout': heatpumpValues[52],
        'SUPout': heatpumpValues[53],
        'MZ2out': heatpumpValues[54],
        'MA2out': heatpumpValues[55],

        'defrostValve': (heatpumpVisibility[47] === 1) ? heatpumpValues[37] : 'no', // #67
        'hotWaterBoilerValve': heatpumpValues[38], // #9
        'heatingSystemCircPump': (heatpumpValues[39] === 1) ? 'on' : 'off', // #27

        'heatSourceMotor': (heatpumpVisibility[54] === 1) ? heatpumpValues[43] : 'no', // #64
        'compressor1': heatpumpValues[44],

        'hotWaterCircPumpExtern': (heatpumpVisibility[57] === 1) ? heatpumpValues[46] : 'no', // #28

        'hours_compressor1': Math.round(heatpumpValues[56] / 3600),
        'starts_compressor1': heatpumpValues[57],
        'hours_compressor2': Math.round(heatpumpValues[58] / 3600),
        'starts_compressor2': heatpumpValues[59],
        'hours_2nd_heat_source1': (heatpumpVisibility[84] === 1) ? Math.round(heatpumpValues[60] / 3600) : 'no', // #32
        'hours_2nd_heat_source2': (heatpumpVisibility[85] === 1) ? Math.round(heatpumpValues[61] / 3600) : 'no', // #38
        'hours_2nd_heat_source3': (heatpumpVisibility[86] === 1) ? Math.round(heatpumpValues[62] / 3600) : 'no', // #39
        'hours_heatpump': (heatpumpVisibility[87] === 1) ? Math.round(heatpumpValues[63] / 3600) : 'no', // #33
        'hours_heating': (heatpumpVisibility[195] === 1) ? Math.round(heatpumpValues[64] / 3600) : 'no', // #34
        'hours_warmwater': (heatpumpVisibility[196] === 1) ? Math.round(heatpumpValues[65] / 3600) : 'no', // #35
        'hours_cooling': (heatpumpVisibility[197] === 1) ? Math.round(heatpumpValues[66] / 3600) : 'no',

        'Time_WPein_akt': heatpumpValues[67],
        'Time_ZWE1_akt': heatpumpValues[68],
        'Time_ZWE2_akt': heatpumpValues[69],
        'Timer_EinschVerz': heatpumpValues[70],
        'Time_SSPAUS_akt': heatpumpValues[71],
        'Time_SSPEIN_akt': heatpumpValues[72],
        'Time_VDStd_akt': heatpumpValues[73],
        'Time_HRM_akt': heatpumpValues[74],
        'Time_HRW_akt': heatpumpValues[75],
        'Time_LGS_akt': heatpumpValues[76],
        'Time_SBW_akt': heatpumpValues[77],

        'typeHeatpump': utils.createHeatPumptTypeString(heatpumpValues[78]), // #31
        'bivalentLevel': heatpumpValues[79], // #43

        'WP_BZ_akt': heatpumpValues[80],

        'firmware': utils.createFirmwareString(heatpumpValues.slice(81, 91)), // #20

        'AdresseIP_akt': utils.int2ipAddress(heatpumpValues[91]),
        'SubNetMask_akt': utils.int2ipAddress(heatpumpValues[92]),
        'Add_Broadcast': utils.int2ipAddress(heatpumpValues[93]),
        'Add_StdGateway': utils.int2ipAddress(heatpumpValues[94]),

        'errors': utils.createErrorCodeList(heatpumpValues.slice(95, 100), heatpumpValues.slice(100, 105)), // #42 Time of first error

        'error_count': heatpumpValues[105],

        'switch_off': utils.createOutageCodeList(heatpumpValues.slice(111, 116), heatpumpValues.slice(106, 111)),

        'Comfort_exists': heatpumpValues[116],

        'heatpump_state1': heatpumpValues[117],
        'heatpump_state2': heatpumpValues[118], // #40
        'heatpump_state3': heatpumpValues[119],
        'heatpump_duration': heatpumpValues[120], // #41
        'heatpump_state_string': utils.createStateString(heatpumpValues),
        'heatpump_extendet_state_string': utils.createExtendedStateString(heatpumpValues),

        'ahp_Stufe': heatpumpValues[121],
        'ahp_Temp': heatpumpValues[122],
        'ahp_Zeit': heatpumpValues[123],

        'opStateHotWater': heatpumpValues[124], // #8
        'opStateHotWaterString': utils.createHotWaterStateString(heatpumpValues),
        'opStateHeating': heatpumpValues[125], // #46
        'opStateMixer1': heatpumpValues[126],
        'opStateMixer2': heatpumpValues[127],
        'Einst_Kurzprogramm': heatpumpValues[128],
        'StatusSlave_1': heatpumpValues[129],
        'StatusSlave_2': heatpumpValues[130],
        'StatusSlave_3': heatpumpValues[131],
        'StatusSlave_4': heatpumpValues[132],
        'StatusSlave_5': heatpumpValues[133],

        'rawDeviceTimeCalc': new Date(heatpumpValues[134] * 1000).toString(), // #22

        'opStateMixer3': heatpumpValues[135],
        'temperature_mixer3_target': (heatpumpVisibility[211] === 1) ? heatpumpValues[136] / 10 : 'no', // #60
        'temperature_mixer3_flow': (heatpumpVisibility[210] === 1) ? heatpumpValues[137] / 10 : 'no', // #59

        'MZ3out': heatpumpValues[138],
        'MA3out': heatpumpValues[139],
        'FP3out': heatpumpValues[140],

        'heatSourceDefrostTimer': (heatpumpVisibility[219] === 1) ? heatpumpValues[141] : 'no', // #66

        'Temperatur_RFV2': heatpumpValues[142] / 10,
        'Temperatur_RFV3': heatpumpValues[143] / 10,
        'SH_SW': heatpumpValues[144],
        'Zaehler_BetrZeitSW': Math.round(heatpumpValues[145] / 3600),
        'FreigabKuehl': heatpumpValues[146],
        'AnalogIn': heatpumpValues[147],
        'SonderZeichen': heatpumpValues[148],
        'SH_ZIP': heatpumpValues[149],
        'WebsrvProgrammWerteBeobarten': heatpumpValues[150],

        'thermalenergy_heating': (heatpumpVisibility[0] === 1) ? heatpumpValues[151] / 10 : 'no', // #36
        'thermalenergy_warmwater': (heatpumpVisibility[1] === 1) ? heatpumpValues[152] / 10 : 'no', // #37
        'thermalenergy_pool': (heatpumpVisibility[2] === 1) ? heatpumpValues[153] / 10 : 'no', // #62
        'thermalenergy_total': heatpumpValues[154] / 10,

        'analogOut1': heatpumpValues[156],
        'analogOut2': heatpumpValues[157],
        'Time_Heissgas': heatpumpValues[158],
        'Temp_Lueftung_Zuluft': heatpumpValues[159] / 10,
        'Temp_Lueftung_Abluft': heatpumpValues[160] / 10,

        'hours_solar': (heatpumpVisibility[248] === 1) ? Math.round(heatpumpValues[161] / 3600) : 'no', // #52
        'analogOut3': heatpumpValues[162],
        'analogOut4': (heatpumpVisibility[267] === 1) ? heatpumpValues[163] : 'no', // #73 - Voltage heating system circulation pump

        'Out_VZU': heatpumpValues[164],
        'Out_VAB': heatpumpValues[165],
        'Out_VSK': heatpumpValues[166],
        'Out_FRH': heatpumpValues[167],
        'AnalogIn2': heatpumpValues[168],
        'AnalogIn3': heatpumpValues[169],
        'SAXin': heatpumpValues[170],
        'SPLin': heatpumpValues[171],
        'Compact_exists': heatpumpValues[172],
        'Durchfluss_WQ': heatpumpValues[173],
        'LIN_exists': heatpumpValues[174],
        'LIN_TUE': heatpumpValues[175],
        'LIN_TUE1': heatpumpValues[176],
        'LIN_VDH': heatpumpValues[177],
        'LIN_UH': heatpumpValues[178],
        'LIN_UH_Soll': heatpumpValues[179],
        'LIN_HD': heatpumpValues[180],
        'LIN_ND': heatpumpValues[181],
        'LIN_VDH_out': heatpumpValues[182]
    };
}

module.exports = {
    getMappedValues,
    getDeprecatedValues
};