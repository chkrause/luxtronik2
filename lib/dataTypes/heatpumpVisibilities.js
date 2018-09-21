const heatpumpVisibilityMap = new Map();
heatpumpVisibilityMap.set('ID_Visi_NieAnzeigen',0);
heatpumpVisibilityMap.set('ID_Visi_ImmerAnzeigen',1);
heatpumpVisibilityMap.set('ID_Visi_Heizung',2);
heatpumpVisibilityMap.set('ID_Visi_Brauwasser',3);
heatpumpVisibilityMap.set('ID_Visi_Schwimmbad',4);
heatpumpVisibilityMap.set('ID_Visi_Kuhlung',5);
heatpumpVisibilityMap.set('ID_Visi_Lueftung',6);
heatpumpVisibilityMap.set('ID_Visi_MK1',7);
heatpumpVisibilityMap.set('ID_Visi_MK2',8);
heatpumpVisibilityMap.set('ID_Visi_ThermDesinfekt',9);
heatpumpVisibilityMap.set('ID_Visi_Zirkulation',10);
heatpumpVisibilityMap.set('ID_Visi_KuhlTemp_SolltempMK1',11);
heatpumpVisibilityMap.set('ID_Visi_KuhlTemp_SolltempMK2',12);
heatpumpVisibilityMap.set('ID_Visi_KuhlTemp_ATDiffMK1',13);
heatpumpVisibilityMap.set('ID_Visi_KuhlTemp_ATDiffMK2',14);
heatpumpVisibilityMap.set('ID_Visi_Service_Information',15);
heatpumpVisibilityMap.set('ID_Visi_Service_Einstellung',16);
heatpumpVisibilityMap.set('ID_Visi_Service_Sprache',17);
heatpumpVisibilityMap.set('ID_Visi_Service_DatumUhrzeit',18);
heatpumpVisibilityMap.set('ID_Visi_Service_Ausheiz',19);
heatpumpVisibilityMap.set('ID_Visi_Service_Anlagenkonfiguration',20);
heatpumpVisibilityMap.set('ID_Visi_Service_IBNAssistant',21);
heatpumpVisibilityMap.set('ID_Visi_Service_ParameterIBNZuruck',22);
heatpumpVisibilityMap.set('ID_Visi_Temp_Vorlauf',23);
heatpumpVisibilityMap.set('ID_Visi_Temp_Rucklauf',24);
heatpumpVisibilityMap.set('ID_Visi_Temp_RL_Soll',25);
heatpumpVisibilityMap.set('ID_Visi_Temp_Ruecklext',26);
heatpumpVisibilityMap.set('ID_Visi_Temp_Heissgas',27);
heatpumpVisibilityMap.set('ID_Visi_Temp_Aussent',28);
heatpumpVisibilityMap.set('ID_Visi_Temp_BW_Ist',29);
heatpumpVisibilityMap.set('ID_Visi_Temp_BW_Soll',30);
heatpumpVisibilityMap.set('ID_Visi_Temp_WQ_Ein',31);
heatpumpVisibilityMap.set('ID_Visi_Temp_Kaltekreis',32);
heatpumpVisibilityMap.set('ID_Visi_Temp_MK1_Vorlauf',33);
heatpumpVisibilityMap.set('ID_Visi_Temp_MK1VL_Soll',34);
heatpumpVisibilityMap.set('ID_Visi_Temp_Raumstation',35);
heatpumpVisibilityMap.set('ID_Visi_Temp_MK2_Vorlauf',36);
heatpumpVisibilityMap.set('ID_Visi_Temp_MK2VL_Soll',37);
heatpumpVisibilityMap.set('ID_Visi_Temp_Solarkoll',38);
heatpumpVisibilityMap.set('ID_Visi_Temp_Solarsp',39);
heatpumpVisibilityMap.set('ID_Visi_Temp_Ext_Energ',40);
heatpumpVisibilityMap.set('ID_Visi_IN_ASD',41);
heatpumpVisibilityMap.set('ID_Visi_IN_BWT',42);
heatpumpVisibilityMap.set('ID_Visi_IN_EVU',43);
heatpumpVisibilityMap.set('ID_Visi_IN_HD',44);
heatpumpVisibilityMap.set('ID_Visi_IN_MOT',45);
heatpumpVisibilityMap.set('ID_Visi_IN_ND',46);
heatpumpVisibilityMap.set('ID_Visi_IN_PEX',47);
heatpumpVisibilityMap.set('ID_Visi_IN_SWT',48);
heatpumpVisibilityMap.set('ID_Visi_OUT_Abtauventil',49);
heatpumpVisibilityMap.set('ID_Visi_OUT_BUP',50);
heatpumpVisibilityMap.set('ID_Visi_OUT_FUP1',51);
heatpumpVisibilityMap.set('ID_Visi_OUT_HUP',52);
heatpumpVisibilityMap.set('ID_Visi_OUT_Mischer1Auf',53);
heatpumpVisibilityMap.set('ID_Visi_OUT_Mischer1Zu',54);
heatpumpVisibilityMap.set('ID_Visi_OUT_Ventilation',55);
heatpumpVisibilityMap.set('ID_Visi_OUT_Ventil_BOSUP',56);
heatpumpVisibilityMap.set('ID_Visi_OUT_Verdichter1',57);
heatpumpVisibilityMap.set('ID_Visi_OUT_Verdichter2',58);
heatpumpVisibilityMap.set('ID_Visi_OUT_ZIP',59);
heatpumpVisibilityMap.set('ID_Visi_OUT_ZUP',60);
heatpumpVisibilityMap.set('ID_Visi_OUT_ZWE1',61);
heatpumpVisibilityMap.set('ID_Visi_OUT_ZWE2_SST',62);
heatpumpVisibilityMap.set('ID_Visi_OUT_ZWE3',63);
heatpumpVisibilityMap.set('ID_Visi_OUT_FUP2',64);
heatpumpVisibilityMap.set('ID_Visi_OUT_SLP',65);
heatpumpVisibilityMap.set('ID_Visi_OUT_SUP',66);
heatpumpVisibilityMap.set('ID_Visi_OUT_Mischer2Auf',67);
heatpumpVisibilityMap.set('ID_Visi_OUT_Mischer2Zu',68);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_WP_Seit',69);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_ZWE1_seit',70);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_ZWE2_seit',71);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_ZWE3_seit',72);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_Netzeinv',73);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_SSP_Zeit1',74);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_VD_Stand',75);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_HRM_Zeit',76);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_HRW_Zeit',77);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_TDI_seit',78);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_Sperre_BW',79);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdVD1',80);
heatpumpVisibilityMap.set('ID_Visi_Bst_ImpVD1',81);
heatpumpVisibilityMap.set('ID_Visi_Bst_dEZVD1',82);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdVD2',83);
heatpumpVisibilityMap.set('ID_Visi_Bst_ImpVD2',84);
heatpumpVisibilityMap.set('ID_Visi_Bst_dEZVD2',85);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdZWE1',86);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdZWE2',87);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdZWE3',88);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdWP',89);
heatpumpVisibilityMap.set('ID_Visi_Text_Kurzprogramme',90);
heatpumpVisibilityMap.set('ID_Visi_Text_Zwangsheizung',91);
heatpumpVisibilityMap.set('ID_Visi_Text_Zwangsbrauchwasser',92);
heatpumpVisibilityMap.set('ID_Visi_Text_Abtauen',93);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_RucklBegr',94);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_HystereseHR',95);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TRErhmax',96);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_Freig2VD',97);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_FreigZWE',98);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_Tluftabt',99);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TDISolltemp',100);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_HystereseBW',101);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_Vorl2VDBW',102);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TAussenmax',103);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TAussenmin',104);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TWQmin',105);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_THGmax',106);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TLABTEnde',107);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_Absenkbis',108);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_Vorlaufmax',109);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TDiffEin',110);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TDiffAus',111);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TDiffmax',112);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TEEHeizung',113);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TEEBrauchw',114);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_Vorl2VDSW',115);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_VLMaxMk1',116);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_VLMaxMk2',117);
heatpumpVisibilityMap.set('ID_Visi_Priori_Brauchwasser',118);
heatpumpVisibilityMap.set('ID_Visi_Priori_Heizung',119);
heatpumpVisibilityMap.set('ID_Visi_Priori_Schwimmbad',120);
heatpumpVisibilityMap.set('ID_Visi_SysEin_EVUSperre',121);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Raumstation',122);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Einbindung',123);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Mischkreis1',124);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Mischkreis2',125);
heatpumpVisibilityMap.set('ID_Visi_SysEin_ZWE1Art',126);
heatpumpVisibilityMap.set('ID_Visi_SysEin_ZWE1Fkt',127);
heatpumpVisibilityMap.set('ID_Visi_SysEin_ZWE2Art',128);
heatpumpVisibilityMap.set('ID_Visi_SysEin_ZWE2Fkt',129);
heatpumpVisibilityMap.set('ID_Visi_SysEin_ZWE3Art',130);
heatpumpVisibilityMap.set('ID_Visi_SysEin_ZWE3Fkt',131);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Stoerung',132);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Brauchwasser1',133);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Brauchwasser2',134);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Brauchwasser3',135);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Brauchwasser4',136);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Brauchwasser5',137);
heatpumpVisibilityMap.set('ID_Visi_SysEin_BWWPmax',138);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Abtzykmax',139);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Luftabt',140);
heatpumpVisibilityMap.set('ID_Visi_SysEin_LuftAbtmax',141);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Abtauen1',142);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Abtauen2',143);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Pumpenoptim',144);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Zusatzpumpe',145);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Zugang',146);
heatpumpVisibilityMap.set('ID_Visi_SysEin_SoledrDurchf',147);
heatpumpVisibilityMap.set('ID_Visi_SysEin_UberwachungVD',148);
heatpumpVisibilityMap.set('ID_Visi_SysEin_RegelungHK',149);
heatpumpVisibilityMap.set('ID_Visi_SysEin_RegelungMK1',150);
heatpumpVisibilityMap.set('ID_Visi_SysEin_RegelungMK2',151);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Kuhlung',152);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Ausheizen',153);
heatpumpVisibilityMap.set('ID_Visi_SysEin_ElektrAnode',154);
heatpumpVisibilityMap.set('ID_Visi_SysEin_SWBBer',155);
heatpumpVisibilityMap.set('ID_Visi_SysEin_SWBMin',156);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Heizung',157);
heatpumpVisibilityMap.set('ID_Visi_SysEin_PeriodeMk1',158);
heatpumpVisibilityMap.set('ID_Visi_SysEin_LaufzeitMk1',159);
heatpumpVisibilityMap.set('ID_Visi_SysEin_PeriodeMk2',160);
heatpumpVisibilityMap.set('ID_Visi_SysEin_LaufzeitMk2',161);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Heizgrenze',162);
heatpumpVisibilityMap.set('ID_Visi_Enlt_HUP',163);
heatpumpVisibilityMap.set('ID_Visi_Enlt_ZUP',164);
heatpumpVisibilityMap.set('ID_Visi_Enlt_BUP',165);
heatpumpVisibilityMap.set('ID_Visi_Enlt_Ventilator_BOSUP',166);
heatpumpVisibilityMap.set('ID_Visi_Enlt_MA1',167);
heatpumpVisibilityMap.set('ID_Visi_Enlt_MZ1',168);
heatpumpVisibilityMap.set('ID_Visi_Enlt_ZIP',169);
heatpumpVisibilityMap.set('ID_Visi_Enlt_MA2',170);
heatpumpVisibilityMap.set('ID_Visi_Enlt_MZ2',171);
heatpumpVisibilityMap.set('ID_Visi_Enlt_SUP',172);
heatpumpVisibilityMap.set('ID_Visi_Enlt_SLP',173);
heatpumpVisibilityMap.set('ID_Visi_Enlt_FP2',174);
heatpumpVisibilityMap.set('ID_Visi_Enlt_Laufzeit',175);
heatpumpVisibilityMap.set('ID_Visi_Anlgkonf_Heizung',176);
heatpumpVisibilityMap.set('ID_Visi_Anlgkonf_Brauchwarmwasser',177);
heatpumpVisibilityMap.set('ID_Visi_Anlgkonf_Schwimmbad',178);
heatpumpVisibilityMap.set('ID_Visi_Heizung_Betriebsart',179);
heatpumpVisibilityMap.set('ID_Visi_Heizung_TemperaturPlusMinus',180);
heatpumpVisibilityMap.set('ID_Visi_Heizung_Heizkurven',181);
heatpumpVisibilityMap.set('ID_Visi_Heizung_Zeitschlaltprogramm',182);
heatpumpVisibilityMap.set('ID_Visi_Heizung_Heizgrenze',183);
heatpumpVisibilityMap.set('ID_Visi_Mitteltemperatur',184);
heatpumpVisibilityMap.set('ID_Visi_Dataenlogger',185);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_DEUTSCH',186);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_ENGLISH',187);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_FRANCAIS',188);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_NORWAY',189);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_TCHECH',190);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_ITALIANO',191);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_NEDERLANDS',192);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_SVENSKA',193);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_POLSKI',194);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_MAGYARUL',195);
heatpumpVisibilityMap.set('ID_Visi_ErrorUSBspeichern',196);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdHz',197);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdBW',198);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdKue',199);
heatpumpVisibilityMap.set('ID_Visi_Service_Systemsteuerung',200);
heatpumpVisibilityMap.set('ID_Visi_Service_Systemsteuerung_Contrast',201);
heatpumpVisibilityMap.set('ID_Visi_Service_Systemsteuerung_Webserver',202);
heatpumpVisibilityMap.set('ID_Visi_Service_Systemsteuerung_IPAdresse',203);
heatpumpVisibilityMap.set('ID_Visi_Service_Systemsteuerung_Fernwartung',204);
heatpumpVisibilityMap.set('ID_Visi_Paralleleschaltung',205);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Paralleleschaltung',206);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_DANSK',207);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_PORTUGES',208);
heatpumpVisibilityMap.set('ID_Visi_Heizkurve_Heizung',209);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Mischkreis3',210);
heatpumpVisibilityMap.set('ID_Visi_MK3',211);
heatpumpVisibilityMap.set('ID_Visi_Temp_MK3_Vorlauf',212);
heatpumpVisibilityMap.set('ID_Visi_Temp_MK3VL_Soll',213);
heatpumpVisibilityMap.set('ID_Visi_OUT_Mischer3Auf',214);
heatpumpVisibilityMap.set('ID_Visi_OUT_Mischer3Zu',215);
heatpumpVisibilityMap.set('ID_Visi_SysEin_RegelungMK3',216);
heatpumpVisibilityMap.set('ID_Visi_SysEin_PeriodeMk3',217);
heatpumpVisibilityMap.set('ID_Visi_SysEin_LaufzeitMk3',218);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Kuhl_Zeit_Ein',219);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Kuhl_Zeit_Aus',220);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_AbtauIn',221);
heatpumpVisibilityMap.set('ID_Visi_Waermemenge_WS',222);
heatpumpVisibilityMap.set('ID_Visi_Waermemenge_WQ',223);
heatpumpVisibilityMap.set('ID_Visi_Enlt_MA3',224);
heatpumpVisibilityMap.set('ID_Visi_Enlt_MZ3',225);
heatpumpVisibilityMap.set('ID_Visi_Enlt_FP3',226);
heatpumpVisibilityMap.set('ID_Visi_OUT_FUP3',227);
heatpumpVisibilityMap.set('ID_Visi_Temp_Raumstation2',228);
heatpumpVisibilityMap.set('ID_Visi_Temp_Raumstation3',229);
heatpumpVisibilityMap.set('ID_Visi_Bst_BStdSW',230);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_LITAUISCH',231);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_ESTNICH',232);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Fernwartung',233);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_SLOVENISCH',234);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TA_EG',235);
heatpumpVisibilityMap.set('ID_Visi_Einst_TVLmax_EG',236);
heatpumpVisibilityMap.set('ID_Visi_SysEin_PoptNachlauf',237);
heatpumpVisibilityMap.set('ID_Visi_RFV_K_Kuehlin',238);
heatpumpVisibilityMap.set('ID_Visi_SysEin_EffizienzpumpeNom',239);
heatpumpVisibilityMap.set('ID_Visi_SysEin_EffizienzpumpeMin',240);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Effizienzpumpe',241);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Waermemenge',242);
heatpumpVisibilityMap.set('ID_Visi_Service_WMZ_Effizienz',243);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Wm_Versorgung_Korrektur',244);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Wm_Auswertung_Korrektur',245);
heatpumpVisibilityMap.set('ID_Visi_IN_AnalogIn',246);
heatpumpVisibilityMap.set('ID_Visi_Eins_SN_Eingabe',247);
heatpumpVisibilityMap.set('ID_Visi_OUT_Analog_1',248);
heatpumpVisibilityMap.set('ID_Visi_OUT_Analog_2',249);
heatpumpVisibilityMap.set('ID_Visi_Solar',250);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Solar',251);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_TDiffKollmax',252);
heatpumpVisibilityMap.set('ID_Visi_AblaufZ_HG_Sperre',253);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Akt_Kuehlung',254);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Vorlauf_VBO',255);
heatpumpVisibilityMap.set('ID_Visi_Einst_KRHyst',256);
heatpumpVisibilityMap.set('ID_Visi_Einst_Akt_Kuehl_Speicher_min',257);
heatpumpVisibilityMap.set('ID_Visi_Einst_Akt_Kuehl_Freig_WQE',258);
heatpumpVisibilityMap.set('ID_Visi_SysEin_AbtZykMin',259);
heatpumpVisibilityMap.set('ID_Visi_SysEin_VD2_Zeit_Min',260);
heatpumpVisibilityMap.set('ID_Visi_EinstTemp_Hysterese_HR_verkuerzt',261);
heatpumpVisibilityMap.set('ID_Visi_Einst_Luf_Feuchteschutz_akt',262);
heatpumpVisibilityMap.set('ID_Visi_Einst_Luf_Reduziert_akt',263);
heatpumpVisibilityMap.set('ID_Visi_Einst_Luf_Nennlueftung_akt',264);
heatpumpVisibilityMap.set('ID_Visi_Einst_Luf_Intensivlueftung_akt',265);
heatpumpVisibilityMap.set('ID_Visi_Temperatur_Lueftung_Zuluft',266);
heatpumpVisibilityMap.set('ID_Visi_Temperatur_Lueftung_Abluft',267);
heatpumpVisibilityMap.set('ID_Visi_OUT_Analog_3',268);
heatpumpVisibilityMap.set('ID_Visi_OUT_Analog_4',269);
heatpumpVisibilityMap.set('ID_Visi_IN_Analog_2',270);
heatpumpVisibilityMap.set('ID_Visi_IN_Analog_3',271);
heatpumpVisibilityMap.set('ID_Visi_IN_SAX',272);
heatpumpVisibilityMap.set('ID_Visi_OUT_VZU',273);
heatpumpVisibilityMap.set('ID_Visi_OUT_VAB',274);
heatpumpVisibilityMap.set('ID_Visi_OUT_VSK',275);
heatpumpVisibilityMap.set('ID_Visi_OUT_FRH',276);
heatpumpVisibilityMap.set('ID_Visi_KuhlTemp_SolltempMK3',277);
heatpumpVisibilityMap.set('ID_Visi_KuhlTemp_ATDiffMK3',278);
heatpumpVisibilityMap.set('ID_Visi_IN_SPL',279);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Lueftungsstufen',280);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Meldung_TDI',281);
heatpumpVisibilityMap.set('ID_Visi_SysEin_Typ_WZW',282);
heatpumpVisibilityMap.set('ID_Visi_BACnet',283);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_SLOWAKISCH',284);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_LETTISCH',285);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_FINNISCH',286);
heatpumpVisibilityMap.set('ID_Visi_Kalibrierung_LWD',287);
heatpumpVisibilityMap.set('ID_Visi_IN_Durchfluss',288);
heatpumpVisibilityMap.set('ID_Visi_LIN_ANSAUG_VERDICHTER',289);
heatpumpVisibilityMap.set('ID_Visi_LIN_VDH',290);
heatpumpVisibilityMap.set('ID_Visi_LIN_UH',291);
heatpumpVisibilityMap.set('ID_Visi_LIN_Druck',292);
heatpumpVisibilityMap.set('ID_Visi_Einst_Sollwert_TRL_Kuehlen',293);
heatpumpVisibilityMap.set('ID_Visi_Entl_ExVentil',294);
heatpumpVisibilityMap.set('ID_Visi_Einst_Medium_Waermequelle',295);
heatpumpVisibilityMap.set('ID_Visi_Einst_Multispeicher',296);
heatpumpVisibilityMap.set('ID_Visi_Einst_Minimale_Ruecklaufsolltemperatur',297);
heatpumpVisibilityMap.set('ID_Visi_Einst_PKuehlTime',298);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_TUERKISCH',299);
heatpumpVisibilityMap.set('ID_Visi_RBE',300);
heatpumpVisibilityMap.set('ID_Visi_Einst_Luf_Stufen_Faktor',301);
heatpumpVisibilityMap.set('ID_Visi_Freigabe_Zeit_ZWE',302);
heatpumpVisibilityMap.set('ID_Visi_Einst_min_VL_Kuehl',303);
heatpumpVisibilityMap.set('ID_Visi_ZWE1',304);
heatpumpVisibilityMap.set('ID_Visi_ZWE2',305);
heatpumpVisibilityMap.set('ID_Visi_ZWE3',306);
heatpumpVisibilityMap.set('ID_Visi_SEC',307);
heatpumpVisibilityMap.set('ID_Visi_HZIO',308);
heatpumpVisibilityMap.set('ID_Visi_WPIO',309);
heatpumpVisibilityMap.set('ID_Visi_LIN_ANSAUG_VERDAMPFER',310);
heatpumpVisibilityMap.set('ID_Visi_LIN_MULTI1',311);
heatpumpVisibilityMap.set('ID_Visi_LIN_MULTI2',312);
heatpumpVisibilityMap.set('ID_Visi_Einst_Leistung_ZWE',313);
heatpumpVisibilityMap.set('ID_Visi_Sprachen_ESPANOL',314);
heatpumpVisibilityMap.set('ID_Visi_Temp_BW_oben',315);
heatpumpVisibilityMap.set('ID_Visi_MAXIO',316);
heatpumpVisibilityMap.set('ID_Visi_OUT_Abtauwunsch',317);
heatpumpVisibilityMap.set('ID_Visi_SmartGrid',318);
heatpumpVisibilityMap.set('ID_Visi_Drehzahlgeregelt',319);
heatpumpVisibilityMap.set('ID_Visi_P155_Inverter',320);
heatpumpVisibilityMap.set('ID_Visi_Leistungsfreigabe',321);
heatpumpVisibilityMap.set('ID_Visi_Einst_Vorl_akt_Kuehl',322);
heatpumpVisibilityMap.set('ID_Visi_Einst_Abtauen_im_Warmwasser',323);
heatpumpVisibilityMap.set('ID_Visi_Waermemenge_ZWE',324);
heatpumpVisibilityMap.set('NB_Param_Visibility',325);

function getHeatpumpVisibilities(values) {
    return {
        'ID_Visi_NieAnzeigen': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_NieAnzeigen')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_ImmerAnzeigen': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_ImmerAnzeigen')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Heizung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Heizung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Brauwasser': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Brauwasser')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Schwimmbad': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Schwimmbad')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Kuhlung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Kuhlung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Lueftung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Lueftung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_MK1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_MK1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_MK2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_MK2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_ThermDesinfekt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_ThermDesinfekt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Zirkulation': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Zirkulation')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_KuhlTemp_SolltempMK1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_KuhlTemp_SolltempMK1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_KuhlTemp_SolltempMK2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_KuhlTemp_SolltempMK2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_KuhlTemp_ATDiffMK1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_KuhlTemp_ATDiffMK1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_KuhlTemp_ATDiffMK2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_KuhlTemp_ATDiffMK2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Information': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Information')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Einstellung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Einstellung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Sprache': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Sprache')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_DatumUhrzeit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_DatumUhrzeit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Ausheiz': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Ausheiz')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Anlagenkonfiguration': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Anlagenkonfiguration')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_IBNAssistant': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_IBNAssistant')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_ParameterIBNZuruck': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_ParameterIBNZuruck')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Vorlauf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Vorlauf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Rucklauf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Rucklauf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_RL_Soll': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_RL_Soll')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Ruecklext': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Ruecklext')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Heissgas': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Heissgas')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Aussent': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Aussent')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_BW_Ist': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_BW_Ist')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_BW_Soll': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_BW_Soll')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_WQ_Ein': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_WQ_Ein')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Kaltekreis': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Kaltekreis')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_MK1_Vorlauf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_MK1_Vorlauf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_MK1VL_Soll': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_MK1VL_Soll')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Raumstation': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Raumstation')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_MK2_Vorlauf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_MK2_Vorlauf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_MK2VL_Soll': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_MK2VL_Soll')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Solarkoll': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Solarkoll')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Solarsp': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Solarsp')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Ext_Energ': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Ext_Energ')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_ASD': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_ASD')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_BWT': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_BWT')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_EVU': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_EVU')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_HD': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_HD')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_MOT': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_MOT')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_ND': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_ND')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_PEX': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_PEX')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_SWT': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_SWT')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Abtauventil': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Abtauventil')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_BUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_BUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_FUP1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_FUP1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_HUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_HUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Mischer1Auf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Mischer1Auf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Mischer1Zu': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Mischer1Zu')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Ventilation': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Ventilation')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Ventil_BOSUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Ventil_BOSUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Verdichter1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Verdichter1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Verdichter2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Verdichter2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_ZIP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_ZIP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_ZUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_ZUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_ZWE1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_ZWE1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_ZWE2_SST': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_ZWE2_SST')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_ZWE3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_ZWE3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_FUP2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_FUP2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_SLP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_SLP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_SUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_SUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Mischer2Auf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Mischer2Auf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Mischer2Zu': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Mischer2Zu')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_WP_Seit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_WP_Seit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_ZWE1_seit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_ZWE1_seit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_ZWE2_seit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_ZWE2_seit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_ZWE3_seit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_ZWE3_seit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_Netzeinv': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_Netzeinv')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_SSP_Zeit1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_SSP_Zeit1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_VD_Stand': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_VD_Stand')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_HRM_Zeit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_HRM_Zeit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_HRW_Zeit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_HRW_Zeit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_TDI_seit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_TDI_seit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_Sperre_BW': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_Sperre_BW')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdVD1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdVD1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_ImpVD1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_ImpVD1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_dEZVD1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_dEZVD1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdVD2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdVD2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_ImpVD2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_ImpVD2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_dEZVD2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_dEZVD2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdZWE1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdZWE1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdZWE2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdZWE2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdZWE3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdZWE3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdWP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdWP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Text_Kurzprogramme': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Text_Kurzprogramme')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Text_Zwangsheizung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Text_Zwangsheizung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Text_Zwangsbrauchwasser': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Text_Zwangsbrauchwasser')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Text_Abtauen': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Text_Abtauen')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_RucklBegr': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_RucklBegr')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_HystereseHR': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_HystereseHR')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TRErhmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TRErhmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_Freig2VD': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_Freig2VD')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_FreigZWE': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_FreigZWE')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_Tluftabt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_Tluftabt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TDISolltemp': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TDISolltemp')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_HystereseBW': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_HystereseBW')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_Vorl2VDBW': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_Vorl2VDBW')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TAussenmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TAussenmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TAussenmin': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TAussenmin')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TWQmin': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TWQmin')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_THGmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_THGmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TLABTEnde': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TLABTEnde')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_Absenkbis': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_Absenkbis')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_Vorlaufmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_Vorlaufmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TDiffEin': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TDiffEin')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TDiffAus': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TDiffAus')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TDiffmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TDiffmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TEEHeizung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TEEHeizung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TEEBrauchw': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TEEBrauchw')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_Vorl2VDSW': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_Vorl2VDSW')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_VLMaxMk1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_VLMaxMk1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_VLMaxMk2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_VLMaxMk2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Priori_Brauchwasser': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Priori_Brauchwasser')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Priori_Heizung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Priori_Heizung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Priori_Schwimmbad': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Priori_Schwimmbad')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_EVUSperre': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_EVUSperre')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Raumstation': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Raumstation')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Einbindung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Einbindung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Mischkreis1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Mischkreis1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Mischkreis2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Mischkreis2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_ZWE1Art': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_ZWE1Art')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_ZWE1Fkt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_ZWE1Fkt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_ZWE2Art': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_ZWE2Art')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_ZWE2Fkt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_ZWE2Fkt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_ZWE3Art': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_ZWE3Art')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_ZWE3Fkt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_ZWE3Fkt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Stoerung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Stoerung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Brauchwasser1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Brauchwasser1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Brauchwasser2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Brauchwasser2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Brauchwasser3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Brauchwasser3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Brauchwasser4': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Brauchwasser4')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Brauchwasser5': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Brauchwasser5')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_BWWPmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_BWWPmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Abtzykmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Abtzykmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Luftabt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Luftabt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_LuftAbtmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_LuftAbtmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Abtauen1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Abtauen1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Abtauen2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Abtauen2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Pumpenoptim': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Pumpenoptim')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Zusatzpumpe': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Zusatzpumpe')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Zugang': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Zugang')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_SoledrDurchf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_SoledrDurchf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_UberwachungVD': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_UberwachungVD')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_RegelungHK': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_RegelungHK')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_RegelungMK1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_RegelungMK1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_RegelungMK2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_RegelungMK2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Kuhlung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Kuhlung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Ausheizen': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Ausheizen')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_ElektrAnode': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_ElektrAnode')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_SWBBer': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_SWBBer')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_SWBMin': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_SWBMin')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Heizung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Heizung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_PeriodeMk1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_PeriodeMk1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_LaufzeitMk1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_LaufzeitMk1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_PeriodeMk2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_PeriodeMk2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_LaufzeitMk2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_LaufzeitMk2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Heizgrenze': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Heizgrenze')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_HUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_HUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_ZUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_ZUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_BUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_BUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_Ventilator_BOSUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_Ventilator_BOSUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_MA1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_MA1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_MZ1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_MZ1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_ZIP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_ZIP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_MA2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_MA2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_MZ2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_MZ2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_SUP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_SUP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_SLP': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_SLP')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_FP2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_FP2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_Laufzeit': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_Laufzeit')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Anlgkonf_Heizung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Anlgkonf_Heizung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Anlgkonf_Brauchwarmwasser': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Anlgkonf_Brauchwarmwasser')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Anlgkonf_Schwimmbad': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Anlgkonf_Schwimmbad')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Heizung_Betriebsart': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Heizung_Betriebsart')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Heizung_TemperaturPlusMinus': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Heizung_TemperaturPlusMinus')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Heizung_Heizkurven': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Heizung_Heizkurven')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Heizung_Zeitschlaltprogramm': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Heizung_Zeitschlaltprogramm')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Heizung_Heizgrenze': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Heizung_Heizgrenze')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Mitteltemperatur': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Mitteltemperatur')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Dataenlogger': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Dataenlogger')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_DEUTSCH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_DEUTSCH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_ENGLISH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_ENGLISH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_FRANCAIS': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_FRANCAIS')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_NORWAY': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_NORWAY')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_TCHECH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_TCHECH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_ITALIANO': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_ITALIANO')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_NEDERLANDS': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_NEDERLANDS')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_SVENSKA': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_SVENSKA')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_POLSKI': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_POLSKI')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_MAGYARUL': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_MAGYARUL')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_ErrorUSBspeichern': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_ErrorUSBspeichern')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdHz': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdHz')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdBW': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdBW')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdKue': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdKue')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Systemsteuerung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Systemsteuerung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Systemsteuerung_Contrast': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Systemsteuerung_Contrast')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Systemsteuerung_Webserver': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Systemsteuerung_Webserver')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Systemsteuerung_IPAdresse': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Systemsteuerung_IPAdresse')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_Systemsteuerung_Fernwartung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_Systemsteuerung_Fernwartung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Paralleleschaltung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Paralleleschaltung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Paralleleschaltung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Paralleleschaltung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_DANSK': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_DANSK')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_PORTUGES': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_PORTUGES')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Heizkurve_Heizung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Heizkurve_Heizung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Mischkreis3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Mischkreis3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_MK3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_MK3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_MK3_Vorlauf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_MK3_Vorlauf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_MK3VL_Soll': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_MK3VL_Soll')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Mischer3Auf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Mischer3Auf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Mischer3Zu': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Mischer3Zu')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_RegelungMK3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_RegelungMK3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_PeriodeMk3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_PeriodeMk3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_LaufzeitMk3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_LaufzeitMk3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Kuhl_Zeit_Ein': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Kuhl_Zeit_Ein')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Kuhl_Zeit_Aus': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Kuhl_Zeit_Aus')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_AbtauIn': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_AbtauIn')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Waermemenge_WS': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Waermemenge_WS')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Waermemenge_WQ': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Waermemenge_WQ')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_MA3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_MA3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_MZ3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_MZ3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Enlt_FP3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Enlt_FP3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_FUP3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_FUP3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Raumstation2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Raumstation2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_Raumstation3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_Raumstation3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Bst_BStdSW': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Bst_BStdSW')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_LITAUISCH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_LITAUISCH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_ESTNICH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_ESTNICH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Fernwartung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Fernwartung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_SLOVENISCH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_SLOVENISCH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TA_EG': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TA_EG')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_TVLmax_EG': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_TVLmax_EG')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_PoptNachlauf': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_PoptNachlauf')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_RFV_K_Kuehlin': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_RFV_K_Kuehlin')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_EffizienzpumpeNom': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_EffizienzpumpeNom')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_EffizienzpumpeMin': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_EffizienzpumpeMin')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Effizienzpumpe': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Effizienzpumpe')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Waermemenge': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Waermemenge')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Service_WMZ_Effizienz': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Service_WMZ_Effizienz')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Wm_Versorgung_Korrektur': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Wm_Versorgung_Korrektur')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Wm_Auswertung_Korrektur': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Wm_Auswertung_Korrektur')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_AnalogIn': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_AnalogIn')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Eins_SN_Eingabe': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Eins_SN_Eingabe')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Analog_1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Analog_1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Analog_2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Analog_2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Solar': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Solar')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Solar': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Solar')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_TDiffKollmax': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_TDiffKollmax')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_AblaufZ_HG_Sperre': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_AblaufZ_HG_Sperre')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Akt_Kuehlung': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Akt_Kuehlung')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Vorlauf_VBO': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Vorlauf_VBO')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_KRHyst': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_KRHyst')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Akt_Kuehl_Speicher_min': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Akt_Kuehl_Speicher_min')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Akt_Kuehl_Freig_WQE': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Akt_Kuehl_Freig_WQE')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_AbtZykMin': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_AbtZykMin')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_VD2_Zeit_Min': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_VD2_Zeit_Min')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_EinstTemp_Hysterese_HR_verkuerzt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_EinstTemp_Hysterese_HR_verkuerzt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Luf_Feuchteschutz_akt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Luf_Feuchteschutz_akt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Luf_Reduziert_akt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Luf_Reduziert_akt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Luf_Nennlueftung_akt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Luf_Nennlueftung_akt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Luf_Intensivlueftung_akt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Luf_Intensivlueftung_akt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temperatur_Lueftung_Zuluft': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temperatur_Lueftung_Zuluft')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temperatur_Lueftung_Abluft': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temperatur_Lueftung_Abluft')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Analog_3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Analog_3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Analog_4': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Analog_4')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_Analog_2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_Analog_2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_Analog_3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_Analog_3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_SAX': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_SAX')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_VZU': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_VZU')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_VAB': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_VAB')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_VSK': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_VSK')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_FRH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_FRH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_KuhlTemp_SolltempMK3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_KuhlTemp_SolltempMK3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_KuhlTemp_ATDiffMK3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_KuhlTemp_ATDiffMK3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_SPL': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_SPL')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Lueftungsstufen': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Lueftungsstufen')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Meldung_TDI': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Meldung_TDI')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SysEin_Typ_WZW': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SysEin_Typ_WZW')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_BACnet': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_BACnet')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_SLOWAKISCH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_SLOWAKISCH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_LETTISCH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_LETTISCH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_FINNISCH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_FINNISCH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Kalibrierung_LWD': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Kalibrierung_LWD')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_IN_Durchfluss': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_IN_Durchfluss')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_LIN_ANSAUG_VERDICHTER': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_LIN_ANSAUG_VERDICHTER')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_LIN_VDH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_LIN_VDH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_LIN_UH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_LIN_UH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_LIN_Druck': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_LIN_Druck')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Sollwert_TRL_Kuehlen': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Sollwert_TRL_Kuehlen')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Entl_ExVentil': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Entl_ExVentil')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Medium_Waermequelle': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Medium_Waermequelle')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Multispeicher': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Multispeicher')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Minimale_Ruecklaufsolltemperatur': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Minimale_Ruecklaufsolltemperatur')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_PKuehlTime': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_PKuehlTime')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_TUERKISCH': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_TUERKISCH')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_RBE': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_RBE')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Luf_Stufen_Faktor': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Luf_Stufen_Faktor')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Freigabe_Zeit_ZWE': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Freigabe_Zeit_ZWE')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_min_VL_Kuehl': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_min_VL_Kuehl')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_ZWE1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_ZWE1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_ZWE2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_ZWE2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_ZWE3': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_ZWE3')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SEC': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SEC')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_HZIO': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_HZIO')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_WPIO': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_WPIO')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_LIN_ANSAUG_VERDAMPFER': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_LIN_ANSAUG_VERDAMPFER')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_LIN_MULTI1': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_LIN_MULTI1')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_LIN_MULTI2': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_LIN_MULTI2')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Leistung_ZWE': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Leistung_ZWE')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Sprachen_ESPANOL': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Sprachen_ESPANOL')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Temp_BW_oben': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Temp_BW_oben')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_MAXIO': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_MAXIO')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_OUT_Abtauwunsch': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_OUT_Abtauwunsch')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_SmartGrid': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_SmartGrid')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Drehzahlgeregelt': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Drehzahlgeregelt')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_P155_Inverter': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_P155_Inverter')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Leistungsfreigabe': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Leistungsfreigabe')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Vorl_akt_Kuehl': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Vorl_akt_Kuehl')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Einst_Abtauen_im_Warmwasser': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Einst_Abtauen_im_Warmwasser')],
			'name': '',
			'unit': 'boolean'
		},
        'ID_Visi_Waermemenge_ZWE': {
			'value': values[heatpumpVisibilityMap.get('ID_Visi_Waermemenge_ZWE')],
			'name': '',
			'unit': 'boolean'
		},
        'NB_Param_Visibility': {
			'value': values[heatpumpVisibilityMap.get('NB_Param_Visibility')],
			'name': '',
			'unit': ''
		},
    };
}

module.exports = {
	getHeatpumpVisibilities,
	heatpumpVisibilityMap
};