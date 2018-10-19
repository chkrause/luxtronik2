const utils = require('../utils');

/**
 *  Constant heatpumpParameterMap descrips the mapping Array index and descriptive name of this value.
 */
const valueMap = new Map();
    valueMap.set('ID_Transfert_LuxNet',0);
    valueMap.set('ID_Einst_WK_akt',1);
    valueMap.set('ID_Einst_BWS_akt',2);
    valueMap.set('ID_Ba_Hz_akt',3);
    valueMap.set('ID_Ba_Bw_akt',4);
    valueMap.set('ID_Ba_Al_akt',5);
    valueMap.set('ID_SU_FrkdHz',6);
    valueMap.set('ID_SU_FrkdBw',7);
    valueMap.set('ID_SU_FrkdAl',8);
    valueMap.set('ID_Einst_HReg_akt',9);
    valueMap.set('ID_Einst_HzHwMAt_akt',10);
    valueMap.set('ID_Einst_HzHwHKE_akt',11);
    valueMap.set('ID_Einst_HzHKRANH_akt',12);
    valueMap.set('ID_Einst_HzHKRABS_akt',13);
    valueMap.set('ID_Einst_HzMK1E_akt',14);
    valueMap.set('ID_Einst_HzMK1ANH_akt',15);
    valueMap.set('ID_Einst_HzMK1ABS_akt',16);
    valueMap.set('ID_Einst_HzFtRl_akt',17);
    valueMap.set('ID_Einst_HzFtMK1Vl_akt',18);
    valueMap.set('ID_Einst_SUBW_akt',19);
    valueMap.set('ID_Einst_BwTDI_akt_MO',20);
    valueMap.set('ID_Einst_BwTDI_akt_DI',21);
    valueMap.set('ID_Einst_BwTDI_akt_MI',22);
    valueMap.set('ID_Einst_BwTDI_akt_DO',23);
    valueMap.set('ID_Einst_BwTDI_akt_FR',24);
    valueMap.set('ID_Einst_BwTDI_akt_SA',25);
    valueMap.set('ID_Einst_BwTDI_akt_SO',26);
    valueMap.set('ID_Einst_BwTDI_akt_AL',27);
    valueMap.set('ID_Einst_AnlKonf_akt',28);
    valueMap.set('ID_Einst_Sprache_akt',29);
    valueMap.set('ID_Switchoff_Zahler',30);
    valueMap.set('ID_Switchoff_index',31);
    valueMap.set('ID_Einst_EvuTyp_akt',32);
    valueMap.set('ID_Einst_RFVEinb_akt',33);
    valueMap.set('ID_Einst_AbtZykMax_akt',34);
    valueMap.set('ID_Einst_HREinb_akt',35);
    valueMap.set('ID_Einst_ZWE1Art_akt',36);
    valueMap.set('ID_Einst_ZWE1Fkt_akt',37);
    valueMap.set('ID_Einst_ZWE2Art_akt',38);
    valueMap.set('ID_Einst_ZWE2Fkt_akt',39);
    valueMap.set('ID_Einst_BWBer_akt',40);
    valueMap.set('ID_Einst_En_Inst',41);
    valueMap.set('ID_Einst_MK1Typ_akt',42);
    valueMap.set('ID_Einst_ABTLuft_akt',43);
    valueMap.set('ID_Einst_TLAbt_akt',44);
    valueMap.set('ID_Einst_LAbtTime_akt',45);
    valueMap.set('ID_Einst_ASDTyp_akt',46);
    valueMap.set('ID_Einst_LGST_akt',47);
    valueMap.set('ID_Einst_BwWpTime_akt',48);
    valueMap.set('ID_Einst_Popt_akt',49);
    valueMap.set('ID_Einst_Kurzprog_akt',50);
    valueMap.set('ID_Timer_Kurzprog_akt',51);
    valueMap.set('ID_Einst_ManAbt_akt',52);
    valueMap.set('ID_Einst_Ahz_akt',53);
    valueMap.set('ID_Einst_TVL_Ahz_1',54);
    valueMap.set('ID_Einst_TVL_Ahz_2',55);
    valueMap.set('ID_Einst_TVL_Ahz_3',56);
    valueMap.set('ID_Einst_TVL_Ahz_4',57);
    valueMap.set('ID_Einst_TVL_Ahz_5',58);
    valueMap.set('ID_Einst_TVL_Ahz_6',59);
    valueMap.set('ID_Einst_TVL_Ahz_7',60);
    valueMap.set('ID_Einst_TVL_Ahz_8',61);
    valueMap.set('ID_Einst_TVL_Ahz_9',62);
    valueMap.set('ID_Einst_TVL_Ahz_10',63);
    valueMap.set('ID_Einst_TVL_Std_1',64);
    valueMap.set('ID_Einst_TVL_Std_2',65);
    valueMap.set('ID_Einst_TVL_Std_3',66);
    valueMap.set('ID_Einst_TVL_Std_4',67);
    valueMap.set('ID_Einst_TVL_Std_5',68);
    valueMap.set('ID_Einst_TVL_Std_6',69);
    valueMap.set('ID_Einst_TVL_Std_7',70);
    valueMap.set('ID_Einst_TVL_Std_8',71);
    valueMap.set('ID_Einst_TVL_Std_9',72);
    valueMap.set('ID_Einst_TVL_Std_10',73);
    valueMap.set('ID_Einst_BWS_Hyst_akt',74);
    valueMap.set('ID_Temp_TBW_BwHD_saved',75);
    valueMap.set('ID_Einst_ABT1_akt',76);
    valueMap.set('ID_Einst_LABTpaus_akt',77);
    valueMap.set('ID_AHZ_state_akt',78);
    valueMap.set('ID_Sollwert_TRL_HZ_AHZ',79);
    valueMap.set('ID_AHP_valid_records',80);
    valueMap.set('ID_Timer_AHZ_akt',81);
    valueMap.set('ID_Einst_BWTINP_akt',82);
    valueMap.set('ID_Einst_ZUPTYP_akt',83);
    valueMap.set('ID_Sollwert_TLG_max',84);
    valueMap.set('ID_Einst_BWZIP_akt',85);
    valueMap.set('ID_Einst_ERRmZWE_akt',86);
    valueMap.set('ID_Einst_TRBegr_akt',87);
    valueMap.set('ID_Einst_HRHyst_akt',88);
    valueMap.set('ID_Einst_TRErhmax_akt',89);
    valueMap.set('ID_Einst_ZWEFreig_akt',90);
    valueMap.set('ID_Einst_TAmax_akt',91);
    valueMap.set('ID_Einst_TAmin_akt',92);
    valueMap.set('ID_Einst_TWQmin_akt',93);
    valueMap.set('ID_Einst_THGmax_akt',94);
    valueMap.set('ID_Einst_FRGT2VD_akt',95);
    valueMap.set('ID_Einst_TV2VDBW_akt',96);
    valueMap.set('ID_Einst_SuAll_akt',97);
    valueMap.set('ID_Einst_TAbtEnd_akt',98);
    valueMap.set('ID_Einst_NrKlingel_akt',99);
    valueMap.set('ID_Einst_BWStyp_akt',100);
    valueMap.set('ID_Einst_ABT2_akt',101);
    valueMap.set('ID_Einst_UeVd_akt',102);
    valueMap.set('ID_Einst_RTyp_akt',103);
    valueMap.set('ID_Einst_AhpM_akt',104);
    valueMap.set('ID_Soll_BWS_akt',105);
    valueMap.set('ID_Timer_Password',106);
    valueMap.set('ID_Einst_Zugangscode',107);
    valueMap.set('ID_Einst_BA_Kuehl_akt',108);
    valueMap.set('ID_Sollwert_Kuehl1_akt',109);
    valueMap.set('ID_Einst_KuehlFreig_akt',110);
    valueMap.set('ID_Einst_TAbsMin_akt',111);
    valueMap.set('ID_TWQmin_saved',112);
    valueMap.set('ID_CWP_saved',113);
    valueMap.set('ID_Einst_Anode_akt',114);
    valueMap.set('ID_Timer_pexoff_akt',115);
    valueMap.set('ID_Einst_AnlPrio_Hzakt',116);
    valueMap.set('ID_Einst_AnlPrio_Bwakt',117);
    valueMap.set('ID_Einst_AnlPrio_Swakt',118);
    valueMap.set('ID_Ba_Sw_akt',119);
    valueMap.set('ID_Einst_RTypMK1_akt',120);
    valueMap.set('ID_Einst_RTypMK2_akt',121);
    valueMap.set('ID_Einst_TDC_Ein_akt',122);
    valueMap.set('ID_Einst_TDC_Aus_akt',123);
    valueMap.set('ID_Einst_TDC_Max_akt',124);
    valueMap.set('ID_Einst_HysHzExEn_akt',125);
    valueMap.set('ID_Einst_HysBwExEn_akt',126);
    valueMap.set('ID_Einst_ZWE3Art_akt',127);
    valueMap.set('ID_Einst_ZWE3Fkt_akt',128);
    valueMap.set('ID_Einst_HzSup_akt',129);
    valueMap.set('ID_Einst_MK2Typ_akt',130);
    valueMap.set('ID_Einst_KuTyp_akt',131);
    valueMap.set('ID_Sollwert_KuCft1_akt',132);
    valueMap.set('ID_Sollwert_KuCft2_akt',133);
    valueMap.set('ID_Sollwert_AtDif1_akt',134);
    valueMap.set('ID_Sollwert_AtDif2_akt',135);
    valueMap.set('ID_SU_FrkdSwb',136);
    valueMap.set('ID_Einst_SwbBer_akt',137);
    valueMap.set('ID_Einst_TV2VDSWB_akt',138);
    valueMap.set('ID_Einst_MinSwan_Time_akt',139);
    valueMap.set('ID_Einst_SuMk2_akt',140);
    valueMap.set('ID_Einst_HzMK2E_akt',141);
    valueMap.set('ID_Einst_HzMK2ANH_akt',142);
    valueMap.set('ID_Einst_HzMK2ABS_akt',143);
    valueMap.set('ID_Einst_HzMK2Hgr_akt',144);
    valueMap.set('ID_Einst_HzFtMK2Vl_akt',145);
    valueMap.set('ID_Temp_THG_BwHD_saved',146);
    valueMap.set('ID_Temp_TA_BwHD_saved',147);
    valueMap.set('ID_Einst_BwHup_akt',148);
    valueMap.set('ID_Einst_TVLmax_akt',149);
    valueMap.set('ID_Einst_MK1LzFaktor_akt',150);
    valueMap.set('ID_Einst_MK2LzFaktor_akt',151);
    valueMap.set('ID_Einst_MK1PerFaktor_akt',152);
    valueMap.set('ID_Einst_MK2PerFaktor_akt',153);
    valueMap.set('ID_Entl_Zyklus_akt',154);
    valueMap.set('ID_Einst_Entl_time_akt',155);
    valueMap.set('ID_Entl_Pause',156);
    valueMap.set('ID_Entl_timer',157);
    valueMap.set('ID_Einst_Entl_akt',158);
    valueMap.set('ID_Ahz_HLeist_confirmed',159);
    valueMap.set('ID_FirstInit_akt',160);
    valueMap.set('ID_Einst_SuAll_akt2',161);
    valueMap.set('ID_Einst_SuAllWo_zeit_0_0',162);
    valueMap.set('ID_Einst_SuAllWo_zeit_0_1',163);
    valueMap.set('ID_Einst_SuAllWo_zeit_1_0',164);
    valueMap.set('ID_Einst_SuAllWo_zeit_1_1',165);
    valueMap.set('ID_Einst_SuAllWo_zeit_2_0',166);
    valueMap.set('ID_Einst_SuAllWo_zeit_2_1',167);
    valueMap.set('ID_Einst_SuAll25_zeit_0_0',168);
    valueMap.set('ID_Einst_SuAll25_zeit_0_1',169);
    valueMap.set('ID_Einst_SuAll25_zeit_1_0',170);
    valueMap.set('ID_Einst_SuAll25_zeit_1_1',171);
    valueMap.set('ID_Einst_SuAll25_zeit_2_0',172);
    valueMap.set('ID_Einst_SuAll25_zeit_2_1',173);
    valueMap.set('ID_Einst_SuAll25_zeit_0_2',174);
    valueMap.set('ID_Einst_SuAll25_zeit_0_3',175);
    valueMap.set('ID_Einst_SuAll25_zeit_1_2',176);
    valueMap.set('ID_Einst_SuAll25_zeit_1_3',177);
    valueMap.set('ID_Einst_SuAll25_zeit_2_2',178);
    valueMap.set('ID_Einst_SuAll25_zeit_2_3',179);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_0',180);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_1',181);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_0',182);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_1',183);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_0',184);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_1',185);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_2',186);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_3',187);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_2',188);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_3',189);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_2',190);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_3',191);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_4',192);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_5',193);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_4',194);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_5',195);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_4',196);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_5',197);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_6',198);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_7',199);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_6',200);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_7',201);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_6',202);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_7',203);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_8',204);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_9',205);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_8',206);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_9',207);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_8',208);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_9',209);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_10',210);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_11',211);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_10',212);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_11',213);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_10',214);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_11',215);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_12',216);
    valueMap.set('ID_Einst_SuAllTg_zeit_0_13',217);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_12',218);
    valueMap.set('ID_Einst_SuAllTg_zeit_1_13',219);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_12',220);
    valueMap.set('ID_Einst_SuAllTg_zeit_2_13',221);
    valueMap.set('ID_Einst_SuHkr_akt',222);
    valueMap.set('ID_Einst_SuHkrW0_zeit_0_0',223);
    valueMap.set('ID_Einst_SuHkrW0_zeit_0_1',224);
    valueMap.set('ID_Einst_SuHkrW0_zeit_1_0',225);
    valueMap.set('ID_Einst_SuHkrW0_zeit_1_1',226);
    valueMap.set('ID_Einst_SuHkrW0_zeit_2_0',227);
    valueMap.set('ID_Einst_SuHkrW0_zeit_2_1',228);
    valueMap.set('ID_Einst_SuHkr25_zeit_0_0',229);
    valueMap.set('ID_Einst_SuHkr25_zeit_0_1',230);
    valueMap.set('ID_Einst_SuHkr25_zeit_1_0',231);
    valueMap.set('ID_Einst_SuHkr25_zeit_1_1',232);
    valueMap.set('ID_Einst_SuHkr25_zeit_2_0',233);
    valueMap.set('ID_Einst_SuHkr25_zeit_2_1',234);
    valueMap.set('ID_Einst_SuHkr25_zeit_0_2',235);
    valueMap.set('ID_Einst_SuHkr25_zeit_0_3',236);
    valueMap.set('ID_Einst_SuHkr25_zeit_1_2',237);
    valueMap.set('ID_Einst_SuHkr25_zeit_1_3',238);
    valueMap.set('ID_Einst_SuHkr25_zeit_2_2',239);
    valueMap.set('ID_Einst_SuHkr25_zeit_2_3',240);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_0',241);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_1',242);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_0',243);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_1',244);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_0',245);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_1',246);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_2',247);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_3',248);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_2',249);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_3',250);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_2',251);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_3',252);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_4',253);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_5',254);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_4',255);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_5',256);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_4',257);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_5',258);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_6',259);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_7',260);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_6',261);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_7',262);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_6',263);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_7',264);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_8',265);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_9',266);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_8',267);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_9',268);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_8',269);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_9',270);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_10',271);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_11',272);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_10',273);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_11',274);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_10',275);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_11',276);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_12',277);
    valueMap.set('ID_Einst_SuHkrTG_zeit_0_13',278);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_12',279);
    valueMap.set('ID_Einst_SuHkrTG_zeit_1_13',280);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_12',281);
    valueMap.set('ID_Einst_SuHkrTG_zeit_2_13',282);
    valueMap.set('ID_Einst_SuMk1_akt',283);
    valueMap.set('ID_Einst_SuMk1W0_zeit_0_0',284);
    valueMap.set('ID_Einst_SuMk1W0_zeit_0_1',285);
    valueMap.set('ID_Einst_SuMk1W0_zeit_1_0',286);
    valueMap.set('ID_Einst_SuMk1W0_zeit_1_1',287);
    valueMap.set('ID_Einst_SuMk1W0_zeit_2_0',288);
    valueMap.set('ID_Einst_SuMk1W0_zeit_2_1',289);
    valueMap.set('ID_Einst_SuMk125_zeit_0_0',290);
    valueMap.set('ID_Einst_SuMk125_zeit_0_1',291);
    valueMap.set('ID_Einst_SuMk125_zeit_1_0',292);
    valueMap.set('ID_Einst_SuMk125_zeit_1_1',293);
    valueMap.set('ID_Einst_SuMk125_zeit_2_0',294);
    valueMap.set('ID_Einst_SuMk125_zeit_2_1',295);
    valueMap.set('ID_Einst_SuMk125_zeit_0_2',296);
    valueMap.set('ID_Einst_SuMk125_zeit_0_3',297);
    valueMap.set('ID_Einst_SuMk125_zeit_1_2',298);
    valueMap.set('ID_Einst_SuMk125_zeit_1_3',299);
    valueMap.set('ID_Einst_SuMk125_zeit_2_2',300);
    valueMap.set('ID_Einst_SuMk125_zeit_2_3',301);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_0',302);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_1',303);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_0',304);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_1',305);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_0',306);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_1',307);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_2',308);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_3',309);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_2',310);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_3',311);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_2',312);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_3',313);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_4',314);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_5',315);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_4',316);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_5',317);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_4',318);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_5',319);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_6',320);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_7',321);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_6',322);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_7',323);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_6',324);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_7',325);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_8',326);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_9',327);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_8',328);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_9',329);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_8',330);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_9',331);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_10',332);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_11',333);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_10',334);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_11',335);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_10',336);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_11',337);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_12',338);
    valueMap.set('ID_Einst_SuMk1TG_zeit_0_13',339);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_12',340);
    valueMap.set('ID_Einst_SuMk1TG_zeit_1_13',341);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_12',342);
    valueMap.set('ID_Einst_SuMk1TG_zeit_2_13',343);
    valueMap.set('ID_Einst_SuMk2_akt2',344);
    valueMap.set('ID_Einst_SuMk2Wo_zeit_0_0',345);
    valueMap.set('ID_Einst_SuMk2Wo_zeit_0_1',346);
    valueMap.set('ID_Einst_SuMk2Wo_zeit_1_0',347);
    valueMap.set('ID_Einst_SuMk2Wo_zeit_1_1',348);
    valueMap.set('ID_Einst_SuMk2Wo_zeit_2_0',349);
    valueMap.set('ID_Einst_SuMk2Wo_zeit_2_1',350);
    valueMap.set('ID_Einst_SuMk225_zeit_0_0',351);
    valueMap.set('ID_Einst_SuMk225_zeit_0_1',352);
    valueMap.set('ID_Einst_SuMk225_zeit_1_0',353);
    valueMap.set('ID_Einst_SuMk225_zeit_1_1',354);
    valueMap.set('ID_Einst_SuMk225_zeit_2_0',355);
    valueMap.set('ID_Einst_SuMk225_zeit_2_1',356);
    valueMap.set('ID_Einst_SuMk225_zeit_0_2',357);
    valueMap.set('ID_Einst_SuMk225_zeit_0_3',358);
    valueMap.set('ID_Einst_SuMk225_zeit_1_2',359);
    valueMap.set('ID_Einst_SuMk225_zeit_1_3',360);
    valueMap.set('ID_Einst_SuMk225_zeit_2_2',361);
    valueMap.set('ID_Einst_SuMk225_zeit_2_3',362);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_0',363);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_1',364);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_0',365);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_1',366);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_0',367);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_1',368);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_2',369);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_3',370);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_2',371);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_3',372);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_2',373);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_3',374);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_4',375);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_5',376);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_4',377);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_5',378);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_4',379);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_5',380);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_6',381);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_7',382);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_6',383);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_7',384);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_6',385);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_7',386);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_8',387);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_9',388);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_8',389);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_9',390);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_8',391);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_9',392);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_10',393);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_11',394);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_10',395);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_11',396);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_10',397);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_11',398);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_12',399);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_0_13',400);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_12',401);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_1_13',402);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_12',403);
    valueMap.set('ID_Einst_SuMk2Tg_zeit_2_13',404);
    valueMap.set('ID_Einst_SUBW_akt2',405);
    valueMap.set('ID_Einst_SuBwWO_zeit_0_0',406);
    valueMap.set('ID_Einst_SuBwWO_zeit_0_1',407);
    valueMap.set('ID_Einst_SuBwWO_zeit_1_0',408);
    valueMap.set('ID_Einst_SuBwWO_zeit_1_1',409);
    valueMap.set('ID_Einst_SuBwWO_zeit_2_0',410);
    valueMap.set('ID_Einst_SuBwWO_zeit_2_1',411);
    valueMap.set('ID_Einst_SuBwWO_zeit_3_0',412);
    valueMap.set('ID_Einst_SuBwWO_zeit_3_1',413);
    valueMap.set('ID_Einst_SuBwWO_zeit_4_0',414);
    valueMap.set('ID_Einst_SuBwWO_zeit_4_1',415);
    valueMap.set('ID_Einst_SuBw25_zeit_0_0',416);
    valueMap.set('ID_Einst_SuBw25_zeit_0_1',417);
    valueMap.set('ID_Einst_SuBw25_zeit_1_0',418);
    valueMap.set('ID_Einst_SuBw25_zeit_1_1',419);
    valueMap.set('ID_Einst_SuBw25_zeit_2_0',420);
    valueMap.set('ID_Einst_SuBw25_zeit_2_1',421);
    valueMap.set('ID_Einst_SuBw25_zeit_3_0',422);
    valueMap.set('ID_Einst_SuBw25_zeit_3_1',423);
    valueMap.set('ID_Einst_SuBw25_zeit_4_0',424);
    valueMap.set('ID_Einst_SuBw25_zeit_4_1',425);
    valueMap.set('ID_Einst_SuBw25_zeit_0_2',426);
    valueMap.set('ID_Einst_SuBw25_zeit_0_3',427);
    valueMap.set('ID_Einst_SuBw25_zeit_1_2',428);
    valueMap.set('ID_Einst_SuBw25_zeit_1_3',429);
    valueMap.set('ID_Einst_SuBw25_zeit_2_2',430);
    valueMap.set('ID_Einst_SuBw25_zeit_2_3',431);
    valueMap.set('ID_Einst_SuBw25_zeit_3_2',432);
    valueMap.set('ID_Einst_SuBw25_zeit_3_3',433);
    valueMap.set('ID_Einst_SuBw25_zeit_4_2',434);
    valueMap.set('ID_Einst_SuBw25_zeit_4_3',435);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_0',436);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_1',437);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_0',438);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_1',439);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_0',440);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_1',441);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_0',442);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_1',443);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_0',444);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_1',445);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_2',446);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_3',447);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_2',448);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_3',449);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_2',450);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_3',451);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_2',452);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_3',453);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_2',454);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_3',455);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_4',456);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_5',457);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_4',458);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_5',459);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_4',460);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_5',461);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_4',462);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_5',463);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_4',464);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_5',465);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_6',466);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_7',467);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_6',468);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_7',469);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_6',470);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_7',471);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_6',472);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_7',473);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_6',474);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_7',475);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_8',476);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_9',477);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_8',478);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_9',479);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_8',480);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_9',481);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_8',482);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_9',483);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_8',484);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_9',485);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_10',486);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_11',487);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_10',488);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_11',489);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_10',490);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_11',491);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_10',492);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_11',493);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_10',494);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_11',495);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_12',496);
    valueMap.set('ID_Einst_SuBwTG_zeit_0_13',497);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_12',498);
    valueMap.set('ID_Einst_SuBwTG_zeit_1_13',499);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_12',500);
    valueMap.set('ID_Einst_SuBwTG_zeit_2_13',501);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_12',502);
    valueMap.set('ID_Einst_SuBwTG_zeit_3_13',503);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_12',504);
    valueMap.set('ID_Einst_SuBwTG_zeit_4_13',505);
    valueMap.set('ID_Einst_SuZIP_akt',506);
    valueMap.set('ID_Einst_SuZIPWo_zeit_0_0',507);
    valueMap.set('ID_Einst_SuZIPWo_zeit_0_1',508);
    valueMap.set('ID_Einst_SuZIPWo_zeit_1_0',509);
    valueMap.set('ID_Einst_SuZIPWo_zeit_1_1',510);
    valueMap.set('ID_Einst_SuZIPWo_zeit_2_0',511);
    valueMap.set('ID_Einst_SuZIPWo_zeit_2_1',512);
    valueMap.set('ID_Einst_SuZIPWo_zeit_3_0',513);
    valueMap.set('ID_Einst_SuZIPWo_zeit_3_1',514);
    valueMap.set('ID_Einst_SuZIPWo_zeit_4_0',515);
    valueMap.set('ID_Einst_SuZIPWo_zeit_4_1',516);
    valueMap.set('ID_Einst_SuZIP25_zeit_0_0',517);
    valueMap.set('ID_Einst_SuZIP25_zeit_0_1',518);
    valueMap.set('ID_Einst_SuZIP25_zeit_1_0',519);
    valueMap.set('ID_Einst_SuZIP25_zeit_1_1',520);
    valueMap.set('ID_Einst_SuZIP25_zeit_2_0',521);
    valueMap.set('ID_Einst_SuZIP25_zeit_2_1',522);
    valueMap.set('ID_Einst_SuZIP25_zeit_3_0',523);
    valueMap.set('ID_Einst_SuZIP25_zeit_3_1',524);
    valueMap.set('ID_Einst_SuZIP25_zeit_4_0',525);
    valueMap.set('ID_Einst_SuZIP25_zeit_4_1',526);
    valueMap.set('ID_Einst_SuZIP25_zeit_0_2',527);
    valueMap.set('ID_Einst_SuZIP25_zeit_0_3',528);
    valueMap.set('ID_Einst_SuZIP25_zeit_1_2',529);
    valueMap.set('ID_Einst_SuZIP25_zeit_1_3',530);
    valueMap.set('ID_Einst_SuZIP25_zeit_2_2',531);
    valueMap.set('ID_Einst_SuZIP25_zeit_2_3',532);
    valueMap.set('ID_Einst_SuZIP25_zeit_3_2',533);
    valueMap.set('ID_Einst_SuZIP25_zeit_3_3',534);
    valueMap.set('ID_Einst_SuZIP25_zeit_4_2',535);
    valueMap.set('ID_Einst_SuZIP25_zeit_4_3',536);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_0',537);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_1',538);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_0',539);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_1',540);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_0',541);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_1',542);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_0',543);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_1',544);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_0',545);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_1',546);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_2',547);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_3',548);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_2',549);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_3',550);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_2',551);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_3',552);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_2',553);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_3',554);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_2',555);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_3',556);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_4',557);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_5',558);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_4',559);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_5',560);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_4',561);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_5',562);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_4',563);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_5',564);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_4',565);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_5',566);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_6',567);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_7',568);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_6',569);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_7',570);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_6',571);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_7',572);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_6',573);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_7',574);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_6',575);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_7',576);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_8',577);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_9',578);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_8',579);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_9',580);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_8',581);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_9',582);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_8',583);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_9',584);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_8',585);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_9',586);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_10',587);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_11',588);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_10',589);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_11',590);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_10',591);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_11',592);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_10',593);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_11',594);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_10',595);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_11',596);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_12',597);
    valueMap.set('ID_Einst_SuZIPTg_zeit_0_13',598);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_12',599);
    valueMap.set('ID_Einst_SuZIPTg_zeit_1_13',600);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_12',601);
    valueMap.set('ID_Einst_SuZIPTg_zeit_2_13',602);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_12',603);
    valueMap.set('ID_Einst_SuZIPTg_zeit_3_13',604);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_12',605);
    valueMap.set('ID_Einst_SuZIPTg_zeit_4_13',606);
    valueMap.set('ID_Einst_SuSwb_akt',607);
    valueMap.set('ID_Einst_SuSwbWo_zeit_0_0',608);
    valueMap.set('ID_Einst_SuSwbWo_zeit_0_1',609);
    valueMap.set('ID_Einst_SuSwbWo_zeit_1_0',610);
    valueMap.set('ID_Einst_SuSwbWo_zeit_1_1',611);
    valueMap.set('ID_Einst_SuSwbWo_zeit_2_0',612);
    valueMap.set('ID_Einst_SuSwbWo_zeit_2_1',613);
    valueMap.set('ID_Einst_SuSwb25_zeit_0_0',614);
    valueMap.set('ID_Einst_SuSwb25_zeit_0_1',615);
    valueMap.set('ID_Einst_SuSwb25_zeit_1_0',616);
    valueMap.set('ID_Einst_SuSwb25_zeit_1_1',617);
    valueMap.set('ID_Einst_SuSwb25_zeit_2_0',618);
    valueMap.set('ID_Einst_SuSwb25_zeit_2_1',619);
    valueMap.set('ID_Einst_SuSwb25_zeit_0_2',620);
    valueMap.set('ID_Einst_SuSwb25_zeit_0_3',621);
    valueMap.set('ID_Einst_SuSwb25_zeit_1_2',622);
    valueMap.set('ID_Einst_SuSwb25_zeit_1_3',623);
    valueMap.set('ID_Einst_SuSwb25_zeit_2_2',624);
    valueMap.set('ID_Einst_SuSwb25_zeit_2_3',625);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_0',626);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_1',627);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_0',628);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_1',629);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_0',630);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_1',631);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_2',632);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_3',633);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_2',634);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_3',635);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_2',636);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_3',637);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_4',638);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_5',639);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_4',640);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_5',641);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_4',642);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_5',643);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_6',644);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_7',645);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_6',646);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_7',647);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_6',648);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_7',649);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_8',650);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_9',651);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_8',652);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_9',653);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_8',654);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_9',655);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_10',656);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_11',657);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_10',658);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_11',659);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_10',660);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_11',661);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_12',662);
    valueMap.set('ID_Einst_SuSwbTg_zeit_0_13',663);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_12',664);
    valueMap.set('ID_Einst_SuSwbTg_zeit_1_13',665);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_12',666);
    valueMap.set('ID_Einst_SuSwbTg_zeit_2_13',667);
    valueMap.set('ID_Zaehler_BetrZeitWP',668);
    valueMap.set('ID_Zaehler_BetrZeitVD1',669);
    valueMap.set('ID_Zaehler_BetrZeitVD2',670);
    valueMap.set('ID_Zaehler_BetrZeitZWE1',671);
    valueMap.set('ID_Zaehler_BetrZeitZWE2',672);
    valueMap.set('ID_Zaehler_BetrZeitZWE3',673);
    valueMap.set('ID_Zaehler_BetrZeitImpVD1',674);
    valueMap.set('ID_Zaehler_BetrZeitImpVD2',675);
    valueMap.set('ID_Zaehler_BetrZeitEZMVD1',676);
    valueMap.set('ID_Zaehler_BetrZeitEZMVD2',677);
    valueMap.set('ID_Einst_Entl_Typ_0',678);
    valueMap.set('ID_Einst_Entl_Typ_1',679);
    valueMap.set('ID_Einst_Entl_Typ_2',680);
    valueMap.set('ID_Einst_Entl_Typ_3',681);
    valueMap.set('ID_Einst_Entl_Typ_4',682);
    valueMap.set('ID_Einst_Entl_Typ_5',683);
    valueMap.set('ID_Einst_Entl_Typ_6',684);
    valueMap.set('ID_Einst_Entl_Typ_7',685);
    valueMap.set('ID_Einst_Entl_Typ_8',686);
    valueMap.set('ID_Einst_Entl_Typ_9',687);
    valueMap.set('ID_Einst_Entl_Typ_10',688);
    valueMap.set('ID_Einst_Entl_Typ_11',689);
    valueMap.set('ID_Einst_Entl_Typ_12',690);
    valueMap.set('ID_Einst_Vorl_max_MK1',691);
    valueMap.set('ID_Einst_Vorl_max_MK2',692);
    valueMap.set('ID_SU_FrkdMK1',693);
    valueMap.set('ID_SU_FrkdMK2',694);
    valueMap.set('ID_Ba_Hz_MK1_akt',695);
    valueMap.set('ID_Ba_Hz_MK2_akt',696);
    valueMap.set('ID_Einst_Zirk_Ein_akt',697);
    valueMap.set('ID_Einst_Zirk_Aus_akt',698);
    valueMap.set('ID_Einst_Heizgrenze',699);
    valueMap.set('ID_Einst_Heizgrenze_Temp',700);
    valueMap.set('ID_VariablenIBNgespeichert',701);
    valueMap.set('ID_SchonIBNAssistant',702);
    valueMap.set('ID_Heizgrenze_0',703);
    valueMap.set('ID_Heizgrenze_1',704);
    valueMap.set('ID_Heizgrenze_2',705);
    valueMap.set('ID_Heizgrenze_3',706);
    valueMap.set('ID_Heizgrenze_4',707);
    valueMap.set('ID_Heizgrenze_5',708);
    valueMap.set('ID_Heizgrenze_6',709);
    valueMap.set('ID_Heizgrenze_7',710);
    valueMap.set('ID_Heizgrenze_8',711);
    valueMap.set('ID_Heizgrenze_9',712);
    valueMap.set('ID_Heizgrenze_10',713);
    valueMap.set('ID_Heizgrenze_11',714);
    valueMap.set('ID_SchemenIBNgewahlt',715);
    valueMap.set('ID_Switchoff_file_0_0',716);
    valueMap.set('ID_Switchoff_file_1_0',717);
    valueMap.set('ID_Switchoff_file_2_0',718);
    valueMap.set('ID_Switchoff_file_3_0',719);
    valueMap.set('ID_Switchoff_file_4_0',720);
    valueMap.set('ID_Switchoff_file_0_1',721);
    valueMap.set('ID_Switchoff_file_1_1',722);
    valueMap.set('ID_Switchoff_file_2_1',723);
    valueMap.set('ID_Switchoff_file_3_1',724);
    valueMap.set('ID_Switchoff_file_4_1',725);
    valueMap.set('ID_DauerDatenLoggerAktiv',726);
    valueMap.set('ID_Laufvar_Heizgrenze',727);
    valueMap.set('ID_Zaehler_BetrZeitHz',728);
    valueMap.set('ID_Zaehler_BetrZeitBW',729);
    valueMap.set('ID_Zaehler_BetrZeitKue',730);
    valueMap.set('ID_SU_FstdHz',731);
    valueMap.set('ID_SU_FstdBw',732);
    valueMap.set('ID_SU_FstdSwb',733);
    valueMap.set('ID_SU_FstdMK1',734);
    valueMap.set('ID_SU_FstdMK2',735);
    valueMap.set('ID_FerienAbsenkungHz',736);
    valueMap.set('ID_FerienAbsenkungMK1',737);
    valueMap.set('ID_FerienAbsenkungMK2',738);
    valueMap.set('ID_FerienModusAktivHz',739);
    valueMap.set('ID_FerienModusAktivBw',740);
    valueMap.set('ID_FerienModusAktivSwb',741);
    valueMap.set('ID_FerienModusAktivMk1',742);
    valueMap.set('ID_FerienModusAktivMk2',743);
    valueMap.set('ID_DisplayContrast_akt',744);
    valueMap.set('ID_Ba_Hz_saved',745);
    valueMap.set('ID_Ba_Bw_saved',746);
    valueMap.set('ID_Ba_Sw_saved',747);
    valueMap.set('ID_Ba_Hz_MK1_saved',748);
    valueMap.set('ID_Ba_Hz_MK2_saved',749);
    valueMap.set('ID_AdresseIP_akt',750);
    valueMap.set('ID_SubNetMask_akt',751);
    valueMap.set('ID_Add_Broadcast_akt',752);
    valueMap.set('ID_Add_StdGateway_akt',753);
    valueMap.set('ID_DHCPServerAktiv_akt',754);
    valueMap.set('ID_WebserverPasswort_1_akt',755);
    valueMap.set('ID_WebserverPasswort_2_akt',756);
    valueMap.set('ID_WebserverPasswort_3_akt',757);
    valueMap.set('ID_WebserverPasswort_4_akt',758);
    valueMap.set('ID_WebserverPasswort_5_akt',759);
    valueMap.set('ID_WebserverPasswort_6_akt',760);
    valueMap.set('ID_WebServerWerteBekommen',761);
    valueMap.set('ID_Einst_ParBetr_akt',762);
    valueMap.set('ID_Einst_WpAnz_akt',763);
    valueMap.set('ID_Einst_PhrTime_akt',764);
    valueMap.set('ID_Einst_HysPar_akt',765);
    valueMap.set('ID_IP_PB_Slave_0',766);
    valueMap.set('ID_IP_PB_Slave_1',767);
    valueMap.set('ID_IP_PB_Slave_2',768);
    valueMap.set('ID_IP_PB_Slave_3',769);
    valueMap.set('ID_IP_PB_Slave_4',770);
    valueMap.set('ID_IP_PB_Slave_5',771);
    valueMap.set('ID_Einst_BwHup_akt_backup',772);
    valueMap.set('ID_Einst_SuMk3_akt',773);
    valueMap.set('ID_Einst_HzMK3E_akt',774);
    valueMap.set('ID_Einst_HzMK3ANH_akt',775);
    valueMap.set('ID_Einst_HzMK3ABS_akt',776);
    valueMap.set('ID_Einst_HzMK3Hgr_akt',777);
    valueMap.set('ID_Einst_HzFtMK3Vl_akt',778);
    valueMap.set('ID_Ba_Hz_MK3_akt',779);
    valueMap.set('ID_Einst_MK3Typ_akt',780);
    valueMap.set('ID_Einst_RTypMK3_akt',781);
    valueMap.set('ID_Einst_MK3LzFaktor_akt',782);
    valueMap.set('ID_Einst_MK3PerFaktor_akt',783);
    valueMap.set('ID_FerienModusAktivMk3',784);
    valueMap.set('ID_SU_FrkdMK3',785);
    valueMap.set('ID_FerienAbsenkungMK3',786);
    valueMap.set('ID_SU_FstdMK3',787);
    valueMap.set('ID_Einst_SuMk3_akt2',788);
    valueMap.set('ID_Einst_SuMk3Wo_zeit_0_0',789);
    valueMap.set('ID_Einst_SuMk3Wo_zeit_0_1',790);
    valueMap.set('ID_Einst_SuMk3Wo_zeit_1_0',791);
    valueMap.set('ID_Einst_SuMk3Wo_zeit_1_1',792);
    valueMap.set('ID_Einst_SuMk3Wo_zeit_2_0',793);
    valueMap.set('ID_Einst_SuMk3Wo_zeit_2_1',794);
    valueMap.set('ID_Einst_SuMk325_zeit_0_0',795);
    valueMap.set('ID_Einst_SuMk325_zeit_0_1',796);
    valueMap.set('ID_Einst_SuMk325_zeit_1_0',797);
    valueMap.set('ID_Einst_SuMk325_zeit_1_1',798);
    valueMap.set('ID_Einst_SuMk325_zeit_2_0',799);
    valueMap.set('ID_Einst_SuMk325_zeit_2_1',800);
    valueMap.set('ID_Einst_SuMk325_zeit_0_2',801);
    valueMap.set('ID_Einst_SuMk325_zeit_0_3',802);
    valueMap.set('ID_Einst_SuMk325_zeit_1_2',803);
    valueMap.set('ID_Einst_SuMk325_zeit_1_3',804);
    valueMap.set('ID_Einst_SuMk325_zeit_2_2',805);
    valueMap.set('ID_Einst_SuMk325_zeit_2_3',806);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_0',807);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_1',808);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_0',809);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_1',810);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_0',811);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_1',812);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_2',813);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_3',814);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_2',815);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_3',816);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_2',817);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_3',818);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_4',819);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_5',820);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_4',821);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_5',822);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_4',823);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_5',824);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_6',825);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_7',826);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_6',827);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_7',828);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_6',829);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_7',830);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_8',831);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_9',832);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_8',833);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_9',834);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_8',835);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_9',836);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_10',837);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_11',838);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_10',839);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_11',840);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_10',841);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_11',842);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_12',843);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_0_13',844);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_12',845);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_1_13',846);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_12',847);
    valueMap.set('ID_Einst_SuMk3Tg_zeit_2_13',848);
    valueMap.set('ID_Ba_Hz_MK3_saved',849);
    valueMap.set('ID_Einst_Kuhl_Zeit_Ein_akt',850);
    valueMap.set('ID_Einst_Kuhl_Zeit_Aus_akt',851);
    valueMap.set('ID_Waermemenge_ab',852);
    valueMap.set('ID_Waermemenge_WQ',853);
    valueMap.set('ID_Waermemenge_Hz',854);
    valueMap.set('ID_Waermemenge_WQ_ges',855);
    valueMap.set('ID_Einst_Entl_Typ_13',856);
    valueMap.set('ID_Einst_Entl_Typ_14',857);
    valueMap.set('ID_Einst_Entl_Typ_15',858);
    valueMap.set('ID_Zaehler_BetrZeitSW',859);
    valueMap.set('ID_Einst_Fernwartung_akt',860);
    valueMap.set('ID_AdresseIPServ_akt',861);
    valueMap.set('ID_Einst_TA_EG_akt',862);
    valueMap.set('ID_Einst_TVLmax_EG_akt',863);
    valueMap.set('ID_Einst_Popt_Nachlauf_akt',864);
    valueMap.set('ID_FernwartungVertrag_akt',865);
    valueMap.set('ID_FernwartungAktuZeit',866);
    valueMap.set('ID_Einst_Effizienzpumpe_Nominal_akt',867);
    valueMap.set('ID_Einst_Effizienzpumpe_Minimal_akt',868);
    valueMap.set('ID_Einst_Effizienzpumpe_akt',869);
    valueMap.set('ID_Einst_Waermemenge_akt',870);
    valueMap.set('ID_Einst_Wm_Versorgung_Korrektur_akt',871);
    valueMap.set('ID_Einst_Wm_Auswertung_Korrektur_akt',872);
    valueMap.set('ID_SoftwareUpdateJetztGemacht_akt',873);
    valueMap.set('ID_WP_SerienNummer_DATUM',874);
    valueMap.set('ID_WP_SerienNummer_HEX',875);
    valueMap.set('ID_WP_SerienNummer_INDEX',876);
    valueMap.set('ID_ProgWerteWebSrvBeobarten',877);
    valueMap.set('ID_Waermemenge_BW',878);
    valueMap.set('ID_Waermemenge_SW',879);
    valueMap.set('ID_Waermemenge_Datum',880);
    valueMap.set('ID_Einst_Solar_akt',881);
    valueMap.set('ID_BSTD_Solar',882);
    valueMap.set('ID_Einst_TDC_Koll_Max_akt',883);
    valueMap.set('ID_Einst_Akt_Kuehlung_akt',884);
    valueMap.set('ID_Einst_Vorlauf_VBO_akt',885);
    valueMap.set('ID_Einst_KRHyst_akt',886);
    valueMap.set('ID_Einst_Akt_Kuehl_Speicher_min_akt',887);
    valueMap.set('ID_Einst_Akt_Kuehl_Freig_WQE_akt',888);
    valueMap.set('ID_NDAB_WW_Anzahl',889);
    valueMap.set('ID_NDS_WW_KD_Quitt',890);
    valueMap.set('ID_Einst_AbtZykMin_akt',891);
    valueMap.set('ID_Einst_VD2_Zeit_Min_akt',892);
    valueMap.set('ID_Einst_Hysterese_HR_verkuerzt_akt',893);
    valueMap.set('ID_Einst_BA_Lueftung_akt',894);
    valueMap.set('ID_Einst_SuLuf_akt',895);
    valueMap.set('ID_Einst_SuLufWo_zeit_0_0_0',896);
    valueMap.set('ID_Einst_SuLufWo_zeit_0_1_0',897);
    valueMap.set('ID_Einst_SuLufWo_zeit_0_2_0',898);
    valueMap.set('ID_Einst_SuLuf25_zeit_0_0_0',899);
    valueMap.set('ID_Einst_SuLuf25_zeit_0_1_0',900);
    valueMap.set('ID_Einst_SuLuf25_zeit_0_2_0',901);
    valueMap.set('ID_Einst_SuLuf25_zeit_0_0_2',902);
    valueMap.set('ID_Einst_SuLuf25_zeit_0_1_2',903);
    valueMap.set('ID_Einst_SuLuf25_zeit_0_2_2',904);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_0_0',905);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_1_0',906);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_2_0',907);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_0_2',908);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_1_2',909);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_2_2',910);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_0_4',911);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_1_4',912);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_2_4',913);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_0_6',914);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_1_6',915);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_2_6',916);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_0_8',917);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_1_8',918);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_2_8',919);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_0_10',920);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_1_10',921);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_2_10',922);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_0_12',923);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_1_12',924);
    valueMap.set('ID_Einst_SuLufTg_zeit_0_2_12',925);
    valueMap.set('ID_Einst_SuLufWo_zeit_1_0_0',926);
    valueMap.set('ID_Einst_SuLufWo_zeit_1_1_0',927);
    valueMap.set('ID_Einst_SuLufWo_zeit_1_2_0',928);
    valueMap.set('ID_Einst_SuLuf25_zeit_1_0_0',929);
    valueMap.set('ID_Einst_SuLuf25_zeit_1_1_0',930);
    valueMap.set('ID_Einst_SuLuf25_zeit_1_2_0',931);
    valueMap.set('ID_Einst_SuLuf25_zeit_1_0_2',932);
    valueMap.set('ID_Einst_SuLuf25_zeit_1_1_2',933);
    valueMap.set('ID_Einst_SuLuf25_zeit_1_2_2',934);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_0_0',935);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_1_0',936);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_2_0',937);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_0_2',938);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_1_2',939);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_2_2',940);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_0_4',941);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_1_4',942);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_2_4',943);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_0_6',944);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_1_6',945);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_2_6',946);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_0_8',947);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_1_8',948);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_2_8',949);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_0_10',950);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_1_10',951);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_2_10',952);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_0_12',953);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_1_12',954);
    valueMap.set('ID_Einst_SuLufTg_zeit_1_2_12',955);
    valueMap.set('ID_FerienModusAktivLueftung',956);
    valueMap.set('ID_Einst_BA_Lueftung_saved',957);
    valueMap.set('ID_SU_FrkdLueftung',958);
    valueMap.set('ID_SU_FstdLueftung',959);
    valueMap.set('ID_Einst_Luf_Feuchteschutz_akt',960);
    valueMap.set('ID_Einst_Luf_Reduziert_akt',961);
    valueMap.set('ID_Einst_Luf_Nennlueftung_akt',962);
    valueMap.set('ID_Einst_Luf_Intensivlueftung_akt',963);
    valueMap.set('ID_Timer_Fil_4Makt',964);
    valueMap.set('ID_Timer_Fil_WoAkt',965);
    valueMap.set('ID_Sollwert_KuCft3_akt',966);
    valueMap.set('ID_Sollwert_AtDif3_akt',967);
    valueMap.set('ID_Bitmaske_0',968);
    valueMap.set('ID_Einst_Lueftungsstufen',969);
    valueMap.set('ID_SysEin_Meldung_TDI',970);
    valueMap.set('ID_SysEin_Typ_WZW',971);
    valueMap.set('ID_Einst_BACnet_aktiviert',972);
    valueMap.set('ID_Einst_BW_max',973);
    valueMap.set('ID_Einst_Sollwert_TRL_Kuehlen',974);
    valueMap.set('ID_Einst_Medium_Waermequelle',975);
    valueMap.set('ID_Einst_Photovoltaik_akt',976);
    valueMap.set('ID_Einst_Multispeicher_akt',977);
    valueMap.set('ID_Einst_PKuehlTime_akt',978);
    valueMap.set('ID_Einst_Minimale_Ruecklaufsolltemperatur',979);
    valueMap.set('ID_RBE_Einflussfaktor_RT_akt',980);
    valueMap.set('ID_RBE_Freigabe_Kuehlung_akt',981);
    valueMap.set('ID_RBE_Waermeverteilsystem_akt',982);
    valueMap.set('ID_RBE_Zeit_Heizstab_aktiv',983);
    valueMap.set('ID_SEC_ND_Alarmgrenze',984);
    valueMap.set('ID_SEC_HD_Alarmgrenze',985);
    valueMap.set('ID_SEC_Abtauendtemperatur',986);
    valueMap.set('ID_Einst_Min_RPM_BW',987);
    valueMap.set('ID_Einst_Luf_Feuchteschutz_Faktor_akt',988);
    valueMap.set('ID_Einst_Luf_Reduziert_Faktor_akt',989);
    valueMap.set('ID_Einst_Luf_Nennlueftung_Faktor_akt',990);
    valueMap.set('ID_Einst_Luf_Intensivlueftung_Faktor_akt',991);
    valueMap.set('ID_Einst_Freigabe_Zeit_ZWE',992);
    valueMap.set('ID_Einst_min_VL_Kuehl',993);
    valueMap.set('ID_Einst_Warmwasser_Nachheizung',994);
    valueMap.set('ID_Switchoff_file_LWD2_0_0',995);
    valueMap.set('ID_Switchoff_file_LWD2_1_0',996);
    valueMap.set('ID_Switchoff_file_LWD2_2_0',997);
    valueMap.set('ID_Switchoff_file_LWD2_3_0',998);
    valueMap.set('ID_Switchoff_file_LWD2_4_0',999);
    valueMap.set('ID_Switchoff_file_LWD2_0_1',1000);
    valueMap.set('ID_Switchoff_file_LWD2_1_1',1001);
    valueMap.set('ID_Switchoff_file_LWD2_2_1',1002);
    valueMap.set('ID_Switchoff_file_LWD2_3_1',1003);
    valueMap.set('ID_Switchoff_file_LWD2_4_1',1004);
    valueMap.set('ID_Switchoff_index_LWD2',1005);
    valueMap.set('ID_Einst_Effizienzpumpe_Nominal_2',1006);
    valueMap.set('ID_Einst_Effizienzpumpe_Minimal_2',1007);
    valueMap.set('ID_Einst_Wm_Versorgung_Korrektur_2',1008);
    valueMap.set('ID_Einst_Wm_Auswertung_Korrektur_2',1009);
    valueMap.set('ID_Einst_isTwin',1010);
    valueMap.set('ID_Einst_TAmin_2',1011);
    valueMap.set('ID_Einst_TVLmax_2',1012);
    valueMap.set('ID_Einst_TA_EG_2',1013);
    valueMap.set('ID_Einst_TVLmax_EG_2',1014);
    valueMap.set('ID_Waermemenge_Hz_2',1015);
    valueMap.set('ID_Waermemenge_BW_2',1016);
    valueMap.set('ID_Waermemenge_SW_2',1017);
    valueMap.set('ID_Waermemenge_ab_2',1018);
    valueMap.set('ID_Einst_Entl_Typ_15_2',1019);
    valueMap.set('ID_Einst_WW_Nachheizung_max',1020);
    valueMap.set('ID_Einst_Kuhl_Zeit_Ein_RT',1021);
    valueMap.set('ID_Einst_ZWE1_Pos',1022);
    valueMap.set('ID_Einst_ZWE2_Pos',1023);
    valueMap.set('ID_Einst_ZWE3_Pos',1024);
    valueMap.set('ID_Einst_Leistung_ZWE',1025);
    valueMap.set('ID_WP_SN2_DATUM',1026);
    valueMap.set('ID_WP_SN2_HEX',1027);
    valueMap.set('ID_WP_SN2_INDEX',1028);
    valueMap.set('ID_CWP_saved2',1029);
    valueMap.set('ID_Einst_SmartGrid',1030);
    valueMap.set('ID_Einst_P155_HDS',1031);
    valueMap.set('ID_Einst_P155_PumpHeat_Max',1032);
    valueMap.set('ID_Einst_P155_PumpHeatCtrl',1033);
    valueMap.set('ID_Einst_P155_PumpDHWCtrl',1034);
    valueMap.set('ID_Einst_P155_PumpDHW_RPM',1035);
    valueMap.set('ID_Einst_P155_PumpPoolCtrl',1036);
    valueMap.set('ID_Einst_P155_PumpPool_RPM',1037);
    valueMap.set('ID_Einst_P155_PumpCool_RPM',1038);
    valueMap.set('ID_Einst_P155_PumpVBOCtrl',1039);
    valueMap.set('ID_Einst_P155_PumpVBO_RPM_C',1040);
    valueMap.set('ID_Einst_P155_PumpDHW_Max',1041);
    valueMap.set('ID_Einst_P155_PumpPool_Max',1042);
    valueMap.set('ID_Einst_P155_Sperrband_1',1043);
    valueMap.set('ID_Einst_P155_Leistungsfreigabe',1044);
    valueMap.set('ID_Einst_P155_DHW_Freq',1045);
    valueMap.set('ID_Einst_SWHUP',1046);
    valueMap.set('ID_Einst_P155_SWB_Freq',1047);
    valueMap.set('ID_Einst_MK1_Regelung',1048);
    valueMap.set('ID_Einst_MK2_Regelung',1049);
    valueMap.set('ID_Einst_MK3_Regelung',1050);
    valueMap.set('ID_Einst_PV_WW_Sperrzeit',1051);
    valueMap.set('ID_Einst_Warmwasser_extra',1052);
    valueMap.set('ID_Einst_Vorl_akt_Kuehl',1053);
    valueMap.set('ID_WP_SN3_DATUM',1054);
    valueMap.set('ID_WP_SN3_HEX',1055);
    valueMap.set('ID_WP_SN3_INDEX',1056);
    valueMap.set('ID_Einst_Vorlauf_ZUP',1057);
    valueMap.set('ID_Einst_Abtauen_im_Warmwasser',1058);
    valueMap.set('ID_Waermemenge_ZWE',1059);
    valueMap.set('ID_Waermemenge_Reset',1060);
    valueMap.set('ID_Waermemenge_Reset_2',1061);
    valueMap.set('AnzahlParameterInit',1062);
    valueMap.set('1063',1063);
    valueMap.set('1064',1064);
    valueMap.set('1065',1065);
    valueMap.set('1066',1066);
    valueMap.set('1067',1067);
    valueMap.set('1068',1068);
    valueMap.set('1069',1069);
    valueMap.set('1070',1070);
    valueMap.set('1071',1071);
    valueMap.set('1072',1072);
    valueMap.set('1073',1073);
    valueMap.set('1074',1074);
    valueMap.set('1075',1075);
    valueMap.set('1076',1076);
    valueMap.set('1077',1077);
    valueMap.set('1078',1078);
    valueMap.set('1079',1079);
    valueMap.set('1080',1080);
    valueMap.set('1081',1081);
    valueMap.set('1082',1082);
	valueMap.set('1083',1083);
    valueMap.set('1084',1084);
    valueMap.set('1085',1085);
    
/**
 * Return the complete List of Heatpump Parameters
 * Heatpump Parameters can be changed, depending on their attribute 'writable'
 * 
 * @param {Int32Array} values
 */
function getMappedValues(values) {
    return {
        'ID_Transfert_LuxNet': {
			'rawvalue': values[valueMap.get('ID_Transfert_LuxNet')],
			'value': values[valueMap.get('ID_Transfert_LuxNet')],
            'name': '??',
            'calculationrule': '??',
            'unit': '??',
			'writeable': false
		},
        'ID_Einst_WK_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_WK_akt')],
            'value': values[valueMap.get('ID_Einst_WK_akt')] /10,
            'name': 'Heizungstemperatur',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_BWS_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BWS_akt')],
            'value': values[valueMap.get('ID_Einst_BWS_akt')] /10,
            'name': 'Warmwassertemperatur Deckung Wärmepumpe',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Ba_Hz_akt': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_akt')],
            'value': values[valueMap.get('ID_Ba_Hz_akt')],
            'name': 'Heizungsmodus',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;3 = Ferien;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Bw_akt': {
            'rawvalue': values[valueMap.get('ID_Ba_Bw_akt')],
            'value': values[valueMap.get('ID_Ba_Bw_akt')],
            'name': 'Warmwassermodus',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;3 = Ferien;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Al_akt': {
            'rawvalue': values[valueMap.get('ID_Ba_Al_akt')],
            'value': values[valueMap.get('ID_Ba_Al_akt')],
            'name': '',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;3 = Ferien;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdHz': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdHz')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdHz')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': 'Heizung - Ferien bis',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdBw': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdBw')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdBw')] * 1000).toUTCString(),
            'name': 'Warmwasser - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdAl': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdAl')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdAl')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HReg_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HReg_akt')],
            'value': values[valueMap.get('ID_Einst_HReg_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzHwMAt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzHwMAt_akt')],
            'value': values[valueMap.get('ID_Einst_HzHwMAt_akt')] /10,
            'name': 'Bezugswert Außentemperatur',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzHwHKE_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzHwHKE_akt')],
            'value': values[valueMap.get('ID_Einst_HzHwHKE_akt')] /10,
            'name': 'Heizkurvenendpunkt',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzHKRANH_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzHKRANH_akt')],
            'value': values[valueMap.get('ID_Einst_HzHKRANH_akt')] / 10,
            'name': 'Heizkurve Paralellverschiebung',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzHKRABS_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzHKRABS_akt')],
            'value': values[valueMap.get('ID_Einst_HzHKRABS_akt')] /10,
            'name': 'Nachtabsenkung',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzMK1E_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK1E_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK1E_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK1ANH_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK1ANH_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK1ANH_akt')] /10 ,
            'name': 'Paralellverschiebung: Bezugswert Außentemperatur',
            'calculationrule': 'value / 10',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK1ABS_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK1ABS_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK1ABS_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtRl_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzFtRl_akt')],
            'value': values[valueMap.get('ID_Einst_HzFtRl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtMK1Vl_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzFtMK1Vl_akt')],
            'value': values[valueMap.get('ID_Einst_HzFtMK1Vl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SUBW_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SUBW_akt')],
            'value': values[valueMap.get('ID_Einst_SUBW_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_MO': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_MO')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_MO')],
            'name': 'Thermische Desinfektion Montag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_DI': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_DI')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_DI')],
            'name': 'Thermische Desinfektion Dienstag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_MI': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_MI')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_MI')],
            'name': 'Thermische Desinfektion Mittwoch',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_DO': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_DO')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_DO')],
            'name': 'Thermische Desinfektion Donnerstag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_FR': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_FR')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_FR')],
            'name': 'Thermische Desinfektion Freitag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_SA': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_SA')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_SA')],
            'name': 'Thermische Desinfektion Samstag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_SO': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_SO')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_SO')],
            'name': 'Thermische Desinfektion Sonntag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_AL': {
            'rawvalue': values[valueMap.get('ID_Einst_BwTDI_akt_AL')],
            'value': values[valueMap.get('ID_Einst_BwTDI_akt_AL')],
            'name': 'Thermische Desinfektion Dauerbetrieb',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlKonf_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_AnlKonf_akt')],
            'value': values[valueMap.get('ID_Einst_AnlKonf_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Sprache_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Sprache_akt')],
            'value': values[valueMap.get('ID_Einst_Sprache_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_Zahler': {
            'rawvalue': values[valueMap.get('ID_Switchoff_Zahler')],
            'value': values[valueMap.get('ID_Switchoff_Zahler')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_index': {
            'rawvalue': values[valueMap.get('ID_Switchoff_index')],
            'value': values[valueMap.get('ID_Switchoff_index')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_EvuTyp_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_EvuTyp_akt')],
            'value': values[valueMap.get('ID_Einst_EvuTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RFVEinb_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_RFVEinb_akt')],
            'value': values[valueMap.get('ID_Einst_RFVEinb_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AbtZykMax_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_AbtZykMax_akt')],
            'value': values[valueMap.get('ID_Einst_AbtZykMax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HREinb_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HREinb_akt')],
            'value': values[valueMap.get('ID_Einst_HREinb_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE1Art_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE1Art_akt')],
            'value': values[valueMap.get('ID_Einst_ZWE1Art_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE1Fkt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE1Fkt_akt')],
            'value': values[valueMap.get('ID_Einst_ZWE1Fkt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE2Art_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE2Art_akt')],
            'value': values[valueMap.get('ID_Einst_ZWE2Art_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE2Fkt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE2Fkt_akt')],
            'value': values[valueMap.get('ID_Einst_ZWE2Fkt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWBer_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BWBer_akt')],
            'value': values[valueMap.get('ID_Einst_BWBer_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_En_Inst': {
            'rawvalue': values[valueMap.get('ID_Einst_En_Inst')],
            'value': values[valueMap.get('ID_Einst_En_Inst')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1Typ_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK1Typ_akt')],
            'value': values[valueMap.get('ID_Einst_MK1Typ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ABTLuft_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ABTLuft_akt')],
            'value': values[valueMap.get('ID_Einst_ABTLuft_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TLAbt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TLAbt_akt')],
            'value': values[valueMap.get('ID_Einst_TLAbt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_LAbtTime_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_LAbtTime_akt')],
            'value': values[valueMap.get('ID_Einst_LAbtTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ASDTyp_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ASDTyp_akt')],
            'value': values[valueMap.get('ID_Einst_ASDTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_LGST_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_LGST_akt')],
            'value': values[valueMap.get('ID_Einst_LGST_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwWpTime_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BwWpTime_akt')],
            'value': values[valueMap.get('ID_Einst_BwWpTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Popt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Popt_akt')],
            'value': values[valueMap.get('ID_Einst_Popt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Kurzprog_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Kurzprog_akt')],
            'value': values[valueMap.get('ID_Einst_Kurzprog_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_Kurzprog_akt': {
            'rawvalue': values[valueMap.get('ID_Timer_Kurzprog_akt')],
            'value': values[valueMap.get('ID_Timer_Kurzprog_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ManAbt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ManAbt_akt')],
            'value': values[valueMap.get('ID_Einst_ManAbt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Ahz_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Ahz_akt')],
            'value': values[valueMap.get('ID_Einst_Ahz_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_1': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_1')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_2': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_2')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_3': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_3')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_4': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_4')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_5': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_5')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_6': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_6')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_7': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_7')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_8': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_8')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_9': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_9')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_10': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Ahz_10')],
            'value': values[valueMap.get('ID_Einst_TVL_Ahz_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_1': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_1')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_2': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_2')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_3': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_3')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_4': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_4')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_5': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_5')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_6': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_6')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_7': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_7')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_8': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_8')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_9': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_9')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_10': {
            'rawvalue': values[valueMap.get('ID_Einst_TVL_Std_10')],
            'value': values[valueMap.get('ID_Einst_TVL_Std_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWS_Hyst_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BWS_Hyst_akt')],
            'value': values[valueMap.get('ID_Einst_BWS_Hyst_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Temp_TBW_BwHD_saved': {
            'rawvalue': values[valueMap.get('ID_Temp_TBW_BwHD_saved')],
            'value': values[valueMap.get('ID_Temp_TBW_BwHD_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ABT1_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ABT1_akt')],
            'value': values[valueMap.get('ID_Einst_ABT1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_LABTpaus_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_LABTpaus_akt')],
            'value': values[valueMap.get('ID_Einst_LABTpaus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_AHZ_state_akt': {
            'rawvalue': values[valueMap.get('ID_AHZ_state_akt')],
            'value': values[valueMap.get('ID_AHZ_state_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_TRL_HZ_AHZ': {
            'rawvalue': values[valueMap.get('ID_Sollwert_TRL_HZ_AHZ')],
            'value': values[valueMap.get('ID_Sollwert_TRL_HZ_AHZ')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_AHP_valid_records': {
            'rawvalue': values[valueMap.get('ID_AHP_valid_records')],
            'value': values[valueMap.get('ID_AHP_valid_records')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_AHZ_akt': {
            'rawvalue': values[valueMap.get('ID_Timer_AHZ_akt')],
            'value': values[valueMap.get('ID_Timer_AHZ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWTINP_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BWTINP_akt')],
            'value': values[valueMap.get('ID_Einst_BWTINP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZUPTYP_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZUPTYP_akt')],
            'value': values[valueMap.get('ID_Einst_ZUPTYP_akt')],
            'name': 'Zusatzumwälzpumpe ??',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_TLG_max': {
            'rawvalue': values[valueMap.get('ID_Sollwert_TLG_max')],
            'value': values[valueMap.get('ID_Sollwert_TLG_max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWZIP_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BWZIP_akt')],
            'value': values[valueMap.get('ID_Einst_BWZIP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ERRmZWE_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ERRmZWE_akt')],
            'value': values[valueMap.get('ID_Einst_ERRmZWE_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TRBegr_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TRBegr_akt')],
            'value': values[valueMap.get('ID_Einst_TRBegr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HRHyst_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HRHyst_akt')],
            'value': values[valueMap.get('ID_Einst_HRHyst_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TRErhmax_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TRErhmax_akt')],
            'value': values[valueMap.get('ID_Einst_TRErhmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWEFreig_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWEFreig_akt')],
            'value': values[valueMap.get('ID_Einst_ZWEFreig_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAmax_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TAmax_akt')],
            'value': values[valueMap.get('ID_Einst_TAmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAmin_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TAmin_akt')],
            'value': values[valueMap.get('ID_Einst_TAmin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TWQmin_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TWQmin_akt')],
            'value': values[valueMap.get('ID_Einst_TWQmin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_THGmax_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_THGmax_akt')],
            'value': values[valueMap.get('ID_Einst_THGmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_FRGT2VD_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_FRGT2VD_akt')],
            'value': values[valueMap.get('ID_Einst_FRGT2VD_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TV2VDBW_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TV2VDBW_akt')],
            'value': values[valueMap.get('ID_Einst_TV2VDBW_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll_akt')],
            'value': values[valueMap.get('ID_Einst_SuAll_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAbtEnd_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TAbtEnd_akt')],
            'value': values[valueMap.get('ID_Einst_TAbtEnd_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_NrKlingel_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_NrKlingel_akt')],
            'value': values[valueMap.get('ID_Einst_NrKlingel_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWStyp_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BWStyp_akt')],
            'value': values[valueMap.get('ID_Einst_BWStyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ABT2_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ABT2_akt')],
            'value': values[valueMap.get('ID_Einst_ABT2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_UeVd_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_UeVd_akt')],
            'value': values[valueMap.get('ID_Einst_UeVd_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTyp_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_RTyp_akt')],
            'value': values[valueMap.get('ID_Einst_RTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AhpM_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_AhpM_akt')],
            'value': values[valueMap.get('ID_Einst_AhpM_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Soll_BWS_akt': {
            'rawvalue': values[valueMap.get('ID_Soll_BWS_akt')],
            'value': values[valueMap.get('ID_Soll_BWS_akt')] / 10,
            'name': 'Zieltemperatur Warmwasser',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Timer_Password': {
            'rawvalue': values[valueMap.get('ID_Timer_Password')],
            'value': values[valueMap.get('ID_Timer_Password')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Zugangscode': {
            'rawvalue': values[valueMap.get('ID_Einst_Zugangscode')],
            'value': values[valueMap.get('ID_Einst_Zugangscode')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BA_Kuehl_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BA_Kuehl_akt')],
            'value': values[valueMap.get('ID_Einst_BA_Kuehl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_Kuehl1_akt': {
            'rawvalue': values[valueMap.get('ID_Sollwert_Kuehl1_akt')],
            'value': values[valueMap.get('ID_Sollwert_Kuehl1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_KuehlFreig_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_KuehlFreig_akt')],
            'value': values[valueMap.get('ID_Einst_KuehlFreig_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAbsMin_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TAbsMin_akt')],
            'value': values[valueMap.get('ID_Einst_TAbsMin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_TWQmin_saved': {
            'rawvalue': values[valueMap.get('ID_TWQmin_saved')],
            'value': values[valueMap.get('ID_TWQmin_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_CWP_saved': {
            'rawvalue': values[valueMap.get('ID_CWP_saved')],
            'value': values[valueMap.get('ID_CWP_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Anode_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Anode_akt')],
            'value': values[valueMap.get('ID_Einst_Anode_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_pexoff_akt': {
            'rawvalue': values[valueMap.get('ID_Timer_pexoff_akt')],
            'value': values[valueMap.get('ID_Timer_pexoff_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlPrio_Hzakt': {
            'rawvalue': values[valueMap.get('ID_Einst_AnlPrio_Hzakt')],
            'value': values[valueMap.get('ID_Einst_AnlPrio_Hzakt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlPrio_Bwakt': {
            'rawvalue': values[valueMap.get('ID_Einst_AnlPrio_Bwakt')],
            'value': values[valueMap.get('ID_Einst_AnlPrio_Bwakt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlPrio_Swakt': {
            'rawvalue': values[valueMap.get('ID_Einst_AnlPrio_Swakt')],
            'value': values[valueMap.get('ID_Einst_AnlPrio_Swakt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Sw_akt': {
            'rawvalue': values[valueMap.get('ID_Ba_Sw_akt')],
            'value': values[valueMap.get('ID_Ba_Sw_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTypMK1_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_RTypMK1_akt')],
            'value': values[valueMap.get('ID_Einst_RTypMK1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTypMK2_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_RTypMK2_akt')],
            'value': values[valueMap.get('ID_Einst_RTypMK2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Ein_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TDC_Ein_akt')],
            'value': values[valueMap.get('ID_Einst_TDC_Ein_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Aus_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TDC_Aus_akt')],
            'value': values[valueMap.get('ID_Einst_TDC_Aus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Max_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TDC_Max_akt')],
            'value': values[valueMap.get('ID_Einst_TDC_Max_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HysHzExEn_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HysHzExEn_akt')],
            'value': values[valueMap.get('ID_Einst_HysHzExEn_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HysBwExEn_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HysBwExEn_akt')],
            'value': values[valueMap.get('ID_Einst_HysBwExEn_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE3Art_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE3Art_akt')],
            'value': values[valueMap.get('ID_Einst_ZWE3Art_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE3Fkt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE3Fkt_akt')],
            'value': values[valueMap.get('ID_Einst_ZWE3Fkt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzSup_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzSup_akt')],
            'value': values[valueMap.get('ID_Einst_HzSup_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2Typ_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK2Typ_akt')],
            'value': values[valueMap.get('ID_Einst_MK2Typ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_KuTyp_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_KuTyp_akt')],
            'value': values[valueMap.get('ID_Einst_KuTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_KuCft1_akt': {
            'rawvalue': values[valueMap.get('ID_Sollwert_KuCft1_akt')],
            'value': values[valueMap.get('ID_Sollwert_KuCft1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_KuCft2_akt': {
            'rawvalue': values[valueMap.get('ID_Sollwert_KuCft2_akt')],
            'value': values[valueMap.get('ID_Sollwert_KuCft2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_AtDif1_akt': {
            'rawvalue': values[valueMap.get('ID_Sollwert_AtDif1_akt')],
            'value': values[valueMap.get('ID_Sollwert_AtDif1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_AtDif2_akt': {
            'rawvalue': values[valueMap.get('ID_Sollwert_AtDif2_akt')],
            'value': values[valueMap.get('ID_Sollwert_AtDif2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdSwb': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdSwb')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdSwb')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SwbBer_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SwbBer_akt')],
            'value': values[valueMap.get('ID_Einst_SwbBer_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TV2VDSWB_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TV2VDSWB_akt')],
            'value': values[valueMap.get('ID_Einst_TV2VDSWB_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MinSwan_Time_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MinSwan_Time_akt')],
            'value': values[valueMap.get('ID_Einst_MinSwan_Time_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2_akt')],
            'value': values[valueMap.get('ID_Einst_SuMk2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2E_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK2E_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK2E_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2ANH_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK2ANH_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK2ANH_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2ABS_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK2ABS_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK2ABS_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2Hgr_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK2Hgr_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK2Hgr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtMK2Vl_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzFtMK2Vl_akt')],
            'value': values[valueMap.get('ID_Einst_HzFtMK2Vl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Temp_THG_BwHD_saved': {
            'rawvalue': values[valueMap.get('ID_Temp_THG_BwHD_saved')],
            'value': values[valueMap.get('ID_Temp_THG_BwHD_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Temp_TA_BwHD_saved': {
            'rawvalue': values[valueMap.get('ID_Temp_TA_BwHD_saved')],
            'value': values[valueMap.get('ID_Temp_TA_BwHD_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwHup_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BwHup_akt')],
            'value': values[valueMap.get('ID_Einst_BwHup_akt')],
            'name': 'Warmwasserumwälzpumpe aktiv',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TVLmax_akt')],
            'value': values[valueMap.get('ID_Einst_TVLmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1LzFaktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK1LzFaktor_akt')],
            'value': values[valueMap.get('ID_Einst_MK1LzFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2LzFaktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK2LzFaktor_akt')],
            'value': values[valueMap.get('ID_Einst_MK2LzFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1PerFaktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK1PerFaktor_akt')],
            'value': values[valueMap.get('ID_Einst_MK1PerFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2PerFaktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK2PerFaktor_akt')],
            'value': values[valueMap.get('ID_Einst_MK2PerFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Entl_Zyklus_akt': {
            'rawvalue': values[valueMap.get('ID_Entl_Zyklus_akt')],
            'value': values[valueMap.get('ID_Entl_Zyklus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_time_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_time_akt')],
            'value': values[valueMap.get('ID_Einst_Entl_time_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Entl_Pause': {
            'rawvalue': values[valueMap.get('ID_Entl_Pause')],
            'value': values[valueMap.get('ID_Entl_Pause')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Entl_timer': {
            'rawvalue': values[valueMap.get('ID_Entl_timer')],
            'value': values[valueMap.get('ID_Entl_timer')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_akt')],
            'value': values[valueMap.get('ID_Einst_Entl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ahz_HLeist_confirmed': {
            'rawvalue': values[valueMap.get('ID_Ahz_HLeist_confirmed')],
            'value': values[valueMap.get('ID_Ahz_HLeist_confirmed')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FirstInit_akt': {
            'rawvalue': values[valueMap.get('ID_FirstInit_akt')],
            'value': values[valueMap.get('ID_FirstInit_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll_akt2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll_akt2')],
            'value': values[valueMap.get('ID_Einst_SuAll_akt2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllWo_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuAllWo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllWo_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuAllWo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllWo_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuAllWo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllWo_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuAllWo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllWo_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuAllWo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllWo_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuAllWo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAll25_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuAll25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_4')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_5')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_4')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_5')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_4')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_5')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_6')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_7')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_6')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_7')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_6')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_7')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_8')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_9')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_8')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_9')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_8')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_9')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_10')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_11')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_10')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_11')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_10')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_11')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_12')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_13')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_12')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_13')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_12')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_13')],
            'value': values[valueMap.get('ID_Einst_SuAllTg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr_akt')],
            'value': values[valueMap.get('ID_Einst_SuHkr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrW0_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuHkrW0_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrW0_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuHkrW0_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrW0_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuHkrW0_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrW0_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuHkrW0_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrW0_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuHkrW0_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrW0_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuHkrW0_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuHkr25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_4')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_5')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_4')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_5')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_4')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_5')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_6')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_7')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_6')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_7')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_6')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_7')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_8')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_9')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_8')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_9')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_8')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_9')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_10')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_11')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_10')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_11')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_10')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_11')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_12')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_13')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_12')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_13')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_12')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_13')],
            'value': values[valueMap.get('ID_Einst_SuHkrTG_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1_akt')],
            'value': values[valueMap.get('ID_Einst_SuMk1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1W0_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk1W0_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1W0_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk1W0_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1W0_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk1W0_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1W0_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk1W0_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1W0_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk1W0_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1W0_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk1W0_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk125_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuMk125_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_4')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_5')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_4')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_5')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_4')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_5')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_6')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_7')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_6')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_7')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_6')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_7')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_8')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_9')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_8')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_9')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_8')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_9')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_10')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_11')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_10')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_11')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_10')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_11')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_12')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_13')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_12')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_13')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_12')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_13')],
            'value': values[valueMap.get('ID_Einst_SuMk1TG_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2_akt2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2_akt2')],
            'value': values[valueMap.get('ID_Einst_SuMk2_akt2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk2Wo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk225_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuMk225_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_4')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_5')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_4')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_5')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_4')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_5')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_6')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_7')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_6')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_7')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_6')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_7')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_8')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_9')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_8')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_9')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_8')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_9')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_10')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_11')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_10')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_11')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_10')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_11')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_12')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_13')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_12')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_13')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_12')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_13')],
            'value': values[valueMap.get('ID_Einst_SuMk2Tg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SUBW_akt2': {
            'rawvalue': values[valueMap.get('ID_Einst_SUBW_akt2')],
            'value': values[valueMap.get('ID_Einst_SUBW_akt2')],
            'name': 'Aktive Warmwasserzeiten',
            'calculationrule': '0 = Woche(Mo-So); 1 = 5+2 (Mo-Fr,Sa-So); 2 = Tage (Mo,Di,...)',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_0_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_0_0')]),
            'name': 'Schaltuhr Warmwasser Woche (1) von',
            'calculationrule': '',
            'unit': 'seconds',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_0_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_0_1')]),
            'name': 'Schaltuhr Warmwasser Woche (1) bis',
            'calculationrule': '',
            'unit': 'seconds',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_1_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_1_0')]),
            'name': 'Schaltuhr Warmwasser Woche (2) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_1_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_1_1')]),
            'name': 'Schaltuhr Warmwasser Woche (2) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_2_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_2_0')]),
            'name': 'Schaltuhr Warmwasser Woche (3) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_2_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_2_1')]),
            'name': 'Schaltuhr Warmwasser Woche (3) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_3_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_3_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_3_0')]),
            'name': 'Schaltuhr Warmwasser Woche (4) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_3_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_3_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_3_1')]),
            'name': 'Schaltuhr Warmwasser Woche (4) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_4_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_4_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_4_0')]),
            'name': 'Schaltuhr Warmwasser Woche (5) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_4_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwWO_zeit_4_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwWO_zeit_4_1')]),
            'name': 'Schaltuhr Warmwasser Woche (5) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_0_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_0_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (1) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_0_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_0_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (1) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_1_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_1_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (2) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_1_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_1_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (2) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_2_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_2_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (3) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_2_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_2_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (3) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_3_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_3_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (4) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_3_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_3_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (4) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_4_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_4_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (5) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_4_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_4_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (5) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_0_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_0_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (1) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_0_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_0_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (1) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_1_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_1_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (2) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_1_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_1_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (2) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_2_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_2_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (3) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_2_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_2_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (3) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_3_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_3_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (4) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_3_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_3_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (4) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_4_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBw25_zeit_4_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (5) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBw25_zeit_4_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBw25_zeit_4_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (5) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_0')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_1')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_2')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_3')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_4')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_5')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_4')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_5')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_4')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_5')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_4')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_5')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_4')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_5')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_6')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_7')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_6')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_7')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_6')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_7')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_6')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_7')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_6')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_7')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_8')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_9')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_8')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_9')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_8')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_9')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_8')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_9')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_8')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_9')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_10')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_11')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_10')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_11')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_10')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_11')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_10')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_11')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_10')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_11')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_12')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_0_13')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_0_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_12')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_1_13')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_1_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_12')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_2_13')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_2_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_12')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_3_13')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_3_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_12')],
            'value': utils.createFromTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuBwTG_zeit_4_13')],
            'value': utils.createToTime(values[valueMap.get('ID_Einst_SuBwTG_zeit_4_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP_akt')],
            'value': values[valueMap.get('ID_Einst_SuZIP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_3_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_3_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_3_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_3_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_4_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_4_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_4_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPWo_zeit_4_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPWo_zeit_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_0')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_1')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_0')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_1')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_2')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_3')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_3_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_2')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_3')],
            'value': values[valueMap.get('ID_Einst_SuZIP25_zeit_4_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_0')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_1')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_2')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_3')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_2')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_3')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_4')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_5')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_4')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_5')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_4')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_5')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_4')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_5')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_4')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_5')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_6')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_7')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_6')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_7')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_6')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_7')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_6')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_7')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_6')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_7')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_8')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_9')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_8')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_9')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_8')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_9')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_8')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_9')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_8')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_9')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_10')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_11')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_10')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_11')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_10')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_11')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_10')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_11')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_10')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_11')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_12')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_13')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_12')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_13')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_12')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_13')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_12')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_13')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_3_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_12')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_13')],
            'value': values[valueMap.get('ID_Einst_SuZIPTg_zeit_4_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb_akt')],
            'value': values[valueMap.get('ID_Einst_SuSwb_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbWo_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuSwbWo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbWo_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuSwbWo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbWo_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuSwbWo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbWo_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuSwbWo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbWo_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuSwbWo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbWo_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuSwbWo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuSwb25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_4')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_5')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_4')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_5')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_4')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_5')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_6')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_7')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_6')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_7')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_6')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_7')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_8')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_9')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_8')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_9')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_8')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_9')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_10')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_11')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_10')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_11')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_10')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_11')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_12')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_13')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_12')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_13')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_12')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_13')],
            'value': values[valueMap.get('ID_Einst_SuSwbTg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitWP': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitWP')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitWP')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitVD1': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitVD1')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitVD1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitVD2': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitVD2')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitVD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitZWE1': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitZWE1')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitZWE1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitZWE2': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitZWE2')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitZWE2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitZWE3': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitZWE3')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitZWE3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitImpVD1': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitImpVD1')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitImpVD1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitImpVD2': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitImpVD2')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitImpVD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitEZMVD1': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitEZMVD1')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitEZMVD1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitEZMVD2': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitEZMVD2')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitEZMVD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_0': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_0')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_1': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_1')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_2': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_2')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_3': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_3')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_4': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_4')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_5': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_5')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_6': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_6')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_7': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_7')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_8': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_8')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_9': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_9')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_10': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_10')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_11': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_11')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_12': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_12')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorl_max_MK1': {
            'rawvalue': values[valueMap.get('ID_Einst_Vorl_max_MK1')],
            'value': values[valueMap.get('ID_Einst_Vorl_max_MK1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorl_max_MK2': {
            'rawvalue': values[valueMap.get('ID_Einst_Vorl_max_MK2')],
            'value': values[valueMap.get('ID_Einst_Vorl_max_MK2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdMK1': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdMK1')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdMK1')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 1 - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdMK2': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdMK2')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdMK2')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 2 - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK1_akt': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_MK1_akt')],
            'value': values[valueMap.get('ID_Ba_Hz_MK1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK2_akt': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_MK2_akt')],
            'value': values[valueMap.get('ID_Ba_Hz_MK2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Zirk_Ein_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Zirk_Ein_akt')],
            'value': values[valueMap.get('ID_Einst_Zirk_Ein_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Zirk_Aus_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Zirk_Aus_akt')],
            'value': values[valueMap.get('ID_Einst_Zirk_Aus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Heizgrenze': {
            'rawvalue': values[valueMap.get('ID_Einst_Heizgrenze')],
            'value': values[valueMap.get('ID_Einst_Heizgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Heizgrenze_Temp': {
            'rawvalue': values[valueMap.get('ID_Einst_Heizgrenze_Temp')],
            'value': values[valueMap.get('ID_Einst_Heizgrenze_Temp')] / 10,
            'name': 'Heizgrenze',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_VariablenIBNgespeichert': {
            'rawvalue': values[valueMap.get('ID_VariablenIBNgespeichert')],
            'value': values[valueMap.get('ID_VariablenIBNgespeichert')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SchonIBNAssistant': {
            'rawvalue': values[valueMap.get('ID_SchonIBNAssistant')],
            'value': values[valueMap.get('ID_SchonIBNAssistant')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_0': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_0')],
            'value': values[valueMap.get('ID_Heizgrenze_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_1': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_1')],
            'value': values[valueMap.get('ID_Heizgrenze_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_2': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_2')],
            'value': values[valueMap.get('ID_Heizgrenze_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_3': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_3')],
            'value': values[valueMap.get('ID_Heizgrenze_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_4': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_4')],
            'value': values[valueMap.get('ID_Heizgrenze_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_5': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_5')],
            'value': values[valueMap.get('ID_Heizgrenze_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_6': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_6')],
            'value': values[valueMap.get('ID_Heizgrenze_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_7': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_7')],
            'value': values[valueMap.get('ID_Heizgrenze_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_8': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_8')],
            'value': values[valueMap.get('ID_Heizgrenze_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_9': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_9')],
            'value': values[valueMap.get('ID_Heizgrenze_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_10': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_10')],
            'value': values[valueMap.get('ID_Heizgrenze_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_11': {
            'rawvalue': values[valueMap.get('ID_Heizgrenze_11')],
            'value': values[valueMap.get('ID_Heizgrenze_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SchemenIBNgewahlt': {
            'rawvalue': values[valueMap.get('ID_SchemenIBNgewahlt')],
            'value': values[valueMap.get('ID_SchemenIBNgewahlt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_0_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_0_0')],
            'value': values[valueMap.get('ID_Switchoff_file_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_1_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_1_0')],
            'value': values[valueMap.get('ID_Switchoff_file_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_2_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_2_0')],
            'value': values[valueMap.get('ID_Switchoff_file_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_3_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_3_0')],
            'value': values[valueMap.get('ID_Switchoff_file_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_4_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_4_0')],
            'value': values[valueMap.get('ID_Switchoff_file_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_0_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_0_1')],
            'value': values[valueMap.get('ID_Switchoff_file_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_1_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_1_1')],
            'value': values[valueMap.get('ID_Switchoff_file_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_2_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_2_1')],
            'value': values[valueMap.get('ID_Switchoff_file_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_3_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_3_1')],
            'value': values[valueMap.get('ID_Switchoff_file_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_4_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_4_1')],
            'value': new Date(values[valueMap.get('ID_Switchoff_file_4_1')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_DauerDatenLoggerAktiv': {
            'rawvalue': values[valueMap.get('ID_DauerDatenLoggerAktiv')],
            'value': values[valueMap.get('ID_DauerDatenLoggerAktiv')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Laufvar_Heizgrenze': {
            'rawvalue': values[valueMap.get('ID_Laufvar_Heizgrenze')],
            'value': values[valueMap.get('ID_Laufvar_Heizgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitHz': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitHz')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitHz')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitBW': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitBW')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitBW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitKue': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitKue')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitKue')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdHz': {
            'rawvalue': values[valueMap.get('ID_SU_FstdHz')],
            'value': new Date(values[valueMap.get('ID_SU_FstdHz')] * 1000).toUTCString(),
            'name': 'Heizung - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdBw': {
            'rawvalue': values[valueMap.get('ID_SU_FstdBw')],
            'value': new Date(values[valueMap.get('ID_SU_FstdBw')] * 1000).toUTCString(),
            'name': 'Warmwasser - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdSwb': {
            'rawvalue': values[valueMap.get('ID_SU_FstdSwb')],
            'value': new Date(values[valueMap.get('ID_SU_FstdSwb')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdMK1': {
            'rawvalue': values[valueMap.get('ID_SU_FstdMK1')],
            'value': new Date(values[valueMap.get('ID_SU_FstdMK1')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 1 - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdMK2': {
            'rawvalue': values[valueMap.get('ID_SU_FstdMK2')],
            'value': new Date(values[valueMap.get('ID_SU_FstdMK2')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 2 - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienAbsenkungHz': {
            'rawvalue': values[valueMap.get('ID_FerienAbsenkungHz')],
            'value': values[valueMap.get('ID_FerienAbsenkungHz')] /10,
            'name': 'Heizung Ferienabsenkung',
            'calculationrule': '',
            'unit': '°C',
			'writeable': false
		},
        'ID_FerienAbsenkungMK1': {
            'rawvalue': values[valueMap.get('ID_FerienAbsenkungMK1')],
            'value': values[valueMap.get('ID_FerienAbsenkungMK1')]/10,
            'name': 'Heizung Mischkreis 1 Ferienabsenkung',
            'calculationrule': '',
            'unit': '°C',
			'writeable': false
		},
        'ID_FerienAbsenkungMK2': {
            'rawvalue': values[valueMap.get('ID_FerienAbsenkungMK2')],
            'value': values[valueMap.get('ID_FerienAbsenkungMK2')]/10,
            'name': 'Heizung Mischkreis 2 Ferienabsenkung',
            'calculationrule': '',
            'unit': '°C',
			'writeable': false
		},
        'ID_FerienModusAktivHz': {
            'rawvalue': values[valueMap.get('ID_FerienModusAktivHz')],
            'value': values[valueMap.get('ID_FerienModusAktivHz')],
            'name': 'Ferienmodus Heizung',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivBw': {
            'rawvalue': values[valueMap.get('ID_FerienModusAktivBw')],
            'value': values[valueMap.get('ID_FerienModusAktivBw')],
            'name': 'Ferienmodus Brauchwasser',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivSwb': {
            'rawvalue': values[valueMap.get('ID_FerienModusAktivSwb')],
            'value': values[valueMap.get('ID_FerienModusAktivSwb')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivMk1': {
            'rawvalue': values[valueMap.get('ID_FerienModusAktivMk1')],
            'value': values[valueMap.get('ID_FerienModusAktivMk1')],
            'name': 'Ferienmodus Heizung Mischkreis 1',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivMk2': {
            'rawvalue': values[valueMap.get('ID_FerienModusAktivMk2')],
            'value': values[valueMap.get('ID_FerienModusAktivMk2')],
            'name': 'Ferienmodus Heizung Mischkreis 2',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_DisplayContrast_akt': {
            'rawvalue': values[valueMap.get('ID_DisplayContrast_akt')],
            'value': values[valueMap.get('ID_DisplayContrast_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_saved': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_saved')],
            'value': values[valueMap.get('ID_Ba_Hz_saved')],
            'name': 'Heizungsmodus nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Bw_saved': {
            'rawvalue': values[valueMap.get('ID_Ba_Bw_saved')],
            'value': values[valueMap.get('ID_Ba_Bw_saved')],
            'name': 'Brauchwassermodus nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Sw_saved': {
            'rawvalue': values[valueMap.get('ID_Ba_Sw_saved')],
            'value': values[valueMap.get('ID_Ba_Sw_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK1_saved': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_MK1_saved')],
            'value': values[valueMap.get('ID_Ba_Hz_MK1_saved')],
            'name': 'Heizungsmodus Mischkreis 1 nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK2_saved': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_MK2_saved')],
            'value': values[valueMap.get('ID_Ba_Hz_MK2_saved')],
            'name': 'Heizungsmodus Mischkreis 2 nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_AdresseIP_akt': {
            'rawvalue': values[valueMap.get('ID_AdresseIP_akt')],
            'value': values[valueMap.get('ID_AdresseIP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SubNetMask_akt': {
            'rawvalue': values[valueMap.get('ID_SubNetMask_akt')],
            'value': values[valueMap.get('ID_SubNetMask_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Add_Broadcast_akt': {
            'rawvalue': values[valueMap.get('ID_Add_Broadcast_akt')],
            'value': values[valueMap.get('ID_Add_Broadcast_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Add_StdGateway_akt': {
            'rawvalue': values[valueMap.get('ID_Add_StdGateway_akt')],
            'value': values[valueMap.get('ID_Add_StdGateway_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_DHCPServerAktiv_akt': {
            'rawvalue': values[valueMap.get('ID_DHCPServerAktiv_akt')],
            'value': values[valueMap.get('ID_DHCPServerAktiv_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_1_akt': {
            'rawvalue': values[valueMap.get('ID_WebserverPasswort_1_akt')],
            'value': values[valueMap.get('ID_WebserverPasswort_1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_2_akt': {
            'rawvalue': values[valueMap.get('ID_WebserverPasswort_2_akt')],
            'value': values[valueMap.get('ID_WebserverPasswort_2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_3_akt': {
            'rawvalue': values[valueMap.get('ID_WebserverPasswort_3_akt')],
            'value': values[valueMap.get('ID_WebserverPasswort_3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_4_akt': {
            'rawvalue': values[valueMap.get('ID_WebserverPasswort_4_akt')],
            'value': values[valueMap.get('ID_WebserverPasswort_4_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_5_akt': {
            'rawvalue': values[valueMap.get('ID_WebserverPasswort_5_akt')],
            'value': values[valueMap.get('ID_WebserverPasswort_5_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_6_akt': {
            'rawvalue': values[valueMap.get('ID_WebserverPasswort_6_akt')],
            'value': values[valueMap.get('ID_WebserverPasswort_6_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebServerWerteBekommen': {
            'rawvalue': values[valueMap.get('ID_WebServerWerteBekommen')],
            'value': values[valueMap.get('ID_WebServerWerteBekommen')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ParBetr_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_ParBetr_akt')],
            'value': values[valueMap.get('ID_Einst_ParBetr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_WpAnz_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_WpAnz_akt')],
            'value': values[valueMap.get('ID_Einst_WpAnz_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_PhrTime_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_PhrTime_akt')],
            'value': values[valueMap.get('ID_Einst_PhrTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HysPar_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HysPar_akt')],
            'value': values[valueMap.get('ID_Einst_HysPar_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_0': {
            'rawvalue': values[valueMap.get('ID_IP_PB_Slave_0')],
            'value': values[valueMap.get('ID_IP_PB_Slave_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_1': {
            'rawvalue': values[valueMap.get('ID_IP_PB_Slave_1')],
            'value': values[valueMap.get('ID_IP_PB_Slave_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_2': {
            'rawvalue': values[valueMap.get('ID_IP_PB_Slave_2')],
            'value': values[valueMap.get('ID_IP_PB_Slave_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_3': {
            'rawvalue': values[valueMap.get('ID_IP_PB_Slave_3')],
            'value': values[valueMap.get('ID_IP_PB_Slave_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_4': {
            'rawvalue': values[valueMap.get('ID_IP_PB_Slave_4')],
            'value': values[valueMap.get('ID_IP_PB_Slave_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_5': {
            'rawvalue': values[valueMap.get('ID_IP_PB_Slave_5')],
            'value': values[valueMap.get('ID_IP_PB_Slave_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwHup_akt_backup': {
            'rawvalue': values[valueMap.get('ID_Einst_BwHup_akt_backup')],
            'value': values[valueMap.get('ID_Einst_BwHup_akt_backup')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3_akt')],
            'value': values[valueMap.get('ID_Einst_SuMk3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3E_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK3E_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK3E_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3ANH_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK3ANH_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK3ANH_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3ABS_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK3ABS_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK3ABS_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3Hgr_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzMK3Hgr_akt')],
            'value': values[valueMap.get('ID_Einst_HzMK3Hgr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtMK3Vl_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_HzFtMK3Vl_akt')],
            'value': values[valueMap.get('ID_Einst_HzFtMK3Vl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK3_akt': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_MK3_akt')],
            'value': values[valueMap.get('ID_Ba_Hz_MK3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3Typ_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK3Typ_akt')],
            'value': values[valueMap.get('ID_Einst_MK3Typ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTypMK3_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_RTypMK3_akt')],
            'value': values[valueMap.get('ID_Einst_RTypMK3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3LzFaktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK3LzFaktor_akt')],
            'value': values[valueMap.get('ID_Einst_MK3LzFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3PerFaktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_MK3PerFaktor_akt')],
            'value': values[valueMap.get('ID_Einst_MK3PerFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivMk3': {
            'rawvalue': values[valueMap.get('ID_FerienModusAktivMk3')],
            'value': values[valueMap.get('ID_FerienModusAktivMk3')],
            'name': 'Ferienmodus Mischkreis 3',
            'calculationrule': '0 = deaktiviert, 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdMK3': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdMK3')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdMK3')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 3 - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienAbsenkungMK3': {
            'rawvalue': values[valueMap.get('ID_FerienAbsenkungMK3')],
            'value': values[valueMap.get('ID_FerienAbsenkungMK3')] / 10,
            'name': 'Heizung Mischkreis 3 Ferienabsenkung',
            'calculationrule': 'value / 10',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdMK3': {
            'rawvalue': values[valueMap.get('ID_SU_FstdMK3')],
            'value': new Date(values[valueMap.get('ID_SU_FstdMK3')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 3 - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3_akt2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3_akt2')],
            'value': values[valueMap.get('ID_Einst_SuMk3_akt2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk3Wo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk325_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuMk325_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_0')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_1')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_0')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_1')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_0')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_1': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_1')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_2')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_3')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_2')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_3')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_2')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_3': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_3')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_4')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_5')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_4')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_5')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_4')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_5': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_5')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_6')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_7')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_6')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_7')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_6')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_7': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_7')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_8')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_9')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_8')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_9')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_8')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_9': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_9')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_10')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_11')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_10')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_11')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_10')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_11': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_11')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_12')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_13')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_12')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_13')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_12')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_13': {
            'rawvalue': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_13')],
            'value': values[valueMap.get('ID_Einst_SuMk3Tg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK3_saved': {
            'rawvalue': values[valueMap.get('ID_Ba_Hz_MK3_saved')],
            'value': values[valueMap.get('ID_Ba_Hz_MK3_saved')],
            'name': 'Heizungsmodus Mischkreis 3 nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Kuhl_Zeit_Ein_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Kuhl_Zeit_Ein_akt')],
            'value': values[valueMap.get('ID_Einst_Kuhl_Zeit_Ein_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Kuhl_Zeit_Aus_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Kuhl_Zeit_Aus_akt')],
            'value': values[valueMap.get('ID_Einst_Kuhl_Zeit_Aus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_ab': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_ab')],
            'value': values[valueMap.get('ID_Waermemenge_ab')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_WQ': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_WQ')],
            'value': values[valueMap.get('ID_Waermemenge_WQ')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Hz': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_Hz')],
            'value': values[valueMap.get('ID_Waermemenge_Hz')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_WQ_ges': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_WQ_ges')],
            'value': values[valueMap.get('ID_Waermemenge_WQ_ges')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_13': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_13')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_14': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_14')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_14')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_15': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_15')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_15')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitSW': {
            'rawvalue': values[valueMap.get('ID_Zaehler_BetrZeitSW')],
            'value': values[valueMap.get('ID_Zaehler_BetrZeitSW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Fernwartung_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Fernwartung_akt')],
            'value': values[valueMap.get('ID_Einst_Fernwartung_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_AdresseIPServ_akt': {
            'rawvalue': values[valueMap.get('ID_AdresseIPServ_akt')],
            'value': values[valueMap.get('ID_AdresseIPServ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TA_EG_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TA_EG_akt')],
            'value': values[valueMap.get('ID_Einst_TA_EG_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_EG_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TVLmax_EG_akt')],
            'value': values[valueMap.get('ID_Einst_TVLmax_EG_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Popt_Nachlauf_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Popt_Nachlauf_akt')],
            'value': values[valueMap.get('ID_Einst_Popt_Nachlauf_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FernwartungVertrag_akt': {
            'rawvalue': values[valueMap.get('ID_FernwartungVertrag_akt')],
            'value': values[valueMap.get('ID_FernwartungVertrag_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FernwartungAktuZeit': {
            'rawvalue': values[valueMap.get('ID_FernwartungAktuZeit')],
            'value': values[valueMap.get('ID_FernwartungAktuZeit')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Nominal_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Effizienzpumpe_Nominal_akt')],
            'value': values[valueMap.get('ID_Einst_Effizienzpumpe_Nominal_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Minimal_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Effizienzpumpe_Minimal_akt')],
            'value': values[valueMap.get('ID_Einst_Effizienzpumpe_Minimal_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Effizienzpumpe_akt')],
            'value': values[valueMap.get('ID_Einst_Effizienzpumpe_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Waermemenge_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Waermemenge_akt')],
            'value': values[valueMap.get('ID_Einst_Waermemenge_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Versorgung_Korrektur_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Wm_Versorgung_Korrektur_akt')],
            'value': values[valueMap.get('ID_Einst_Wm_Versorgung_Korrektur_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Auswertung_Korrektur_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Wm_Auswertung_Korrektur_akt')],
            'value': values[valueMap.get('ID_Einst_Wm_Auswertung_Korrektur_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SoftwareUpdateJetztGemacht_akt': {
            'rawvalue': values[valueMap.get('ID_SoftwareUpdateJetztGemacht_akt')],
            'value': values[valueMap.get('ID_SoftwareUpdateJetztGemacht_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SerienNummer_DATUM': {
            'rawvalue': values[valueMap.get('ID_WP_SerienNummer_DATUM')],
            'value': values[valueMap.get('ID_WP_SerienNummer_DATUM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SerienNummer_HEX': {
            'rawvalue': values[valueMap.get('ID_WP_SerienNummer_HEX')],
            'value': values[valueMap.get('ID_WP_SerienNummer_HEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SerienNummer_INDEX': {
            'rawvalue': values[valueMap.get('ID_WP_SerienNummer_INDEX')],
            'value': values[valueMap.get('ID_WP_SerienNummer_INDEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_ProgWerteWebSrvBeobarten': {
            'rawvalue': values[valueMap.get('ID_ProgWerteWebSrvBeobarten')],
            'value': values[valueMap.get('ID_ProgWerteWebSrvBeobarten')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_BW': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_BW')],
            'value': values[valueMap.get('ID_Waermemenge_BW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_SW': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_SW')],
            'value': values[valueMap.get('ID_Waermemenge_SW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Datum': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_Datum')],
            'value': values[valueMap.get('ID_Waermemenge_Datum')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Solar_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Solar_akt')],
            'value': values[valueMap.get('ID_Einst_Solar_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_BSTD_Solar': {
            'rawvalue': values[valueMap.get('ID_BSTD_Solar')],
            'value': values[valueMap.get('ID_BSTD_Solar')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Koll_Max_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_TDC_Koll_Max_akt')],
            'value': values[valueMap.get('ID_Einst_TDC_Koll_Max_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Akt_Kuehlung_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Akt_Kuehlung_akt')],
            'value': values[valueMap.get('ID_Einst_Akt_Kuehlung_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorlauf_VBO_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Vorlauf_VBO_akt')],
            'value': values[valueMap.get('ID_Einst_Vorlauf_VBO_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_KRHyst_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_KRHyst_akt')],
            'value': values[valueMap.get('ID_Einst_KRHyst_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Akt_Kuehl_Speicher_min_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Akt_Kuehl_Speicher_min_akt')],
            'value': values[valueMap.get('ID_Einst_Akt_Kuehl_Speicher_min_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Akt_Kuehl_Freig_WQE_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Akt_Kuehl_Freig_WQE_akt')],
            'value': values[valueMap.get('ID_Einst_Akt_Kuehl_Freig_WQE_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_NDAB_WW_Anzahl': {
            'rawvalue': values[valueMap.get('ID_NDAB_WW_Anzahl')],
            'value': values[valueMap.get('ID_NDAB_WW_Anzahl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_NDS_WW_KD_Quitt': {
            'rawvalue': values[valueMap.get('ID_NDS_WW_KD_Quitt')],
            'value': values[valueMap.get('ID_NDS_WW_KD_Quitt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AbtZykMin_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_AbtZykMin_akt')],
            'value': values[valueMap.get('ID_Einst_AbtZykMin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_VD2_Zeit_Min_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_VD2_Zeit_Min_akt')],
            'value': values[valueMap.get('ID_Einst_VD2_Zeit_Min_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Hysterese_HR_verkuerzt_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Hysterese_HR_verkuerzt_akt')],
            'value': values[valueMap.get('ID_Einst_Hysterese_HR_verkuerzt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BA_Lueftung_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_BA_Lueftung_akt')],
            'value': values[valueMap.get('ID_Einst_BA_Lueftung_akt')],
            'name': 'Lüftung',
            'calculationrule': '0 = Automatik;1 = Party;2 = Ferien;3 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf_akt')],
            'value': values[valueMap.get('ID_Einst_SuLuf_akt')],
            'name': 'Aktive Lüftungszeiten',
            'calculationrule': '4 = 5+2(Mo-Fr,Sa-So);3 = Woche (Mo-So); 5 = Tage (Mo,Di,...)',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_0_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufWo_zeit_0_0_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufWo_zeit_0_0_0')]),
            'name': 'Schaltuhr Lüftung Woche (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_0_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufWo_zeit_0_1_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufWo_zeit_0_1_0')]),
            'name': 'Schaltuhr Lüftung Woche (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_0_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufWo_zeit_0_2_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufWo_zeit_0_2_0')]),
            'name': 'Schaltuhr Lüftung Woche (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_0_0_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_0_0_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_0_1_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_0_1_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_0_2_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_0_2_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_0_0_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_0_0_2')]),
            'name': 'Schaltuhr Lüftung Sa-So (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_0_1_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_0_1_2')]),
            'name': 'Schaltuhr Lüftung Sa-So (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_0_2_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_0_2_2')]),
            'name': 'Schaltuhr Lüftung Sa-So (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_0')]),
            'name': 'Schaltuhr Lüftung So (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_0')]),
            'name': 'Schaltuhr Lüftung So (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_0')]),
            'name': 'Schaltuhr Lüftung So (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_2')]),
            'name': 'Schaltuhr Lüftung Mo (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_2')]),
            'name': 'Schaltuhr Lüftung Mo (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_2')]),
            'name': 'Schaltuhr Lüftung Mo (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_4')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_4')]),
            'name': 'Schaltuhr Lüftung Di (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_4')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_4')]),
            'name': 'Schaltuhr Lüftung Di (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_4')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_4')]),
            'name': 'Schaltuhr Lüftung Di (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_6')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_6')]),
            'name': 'Schaltuhr Lüftung Mi (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_6')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_6')]),
            'name': 'Schaltuhr Lüftung Mi (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_6')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_6')]),
            'name': 'Schaltuhr Lüftung Mi (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_8')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_8')]),
            'name': 'Schaltuhr Lüftung Do (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_8')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_8')]),
            'name': 'Schaltuhr Lüftung Do (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_8')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_8')]),
            'name': 'Schaltuhr Lüftung Do (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_10')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_10')]),
            'name': 'Schaltuhr Lüftung Fr (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_10')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_10')]),
            'name': 'Schaltuhr Lüftung Fr (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_10')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_10')]),
            'name': 'Schaltuhr Lüftung Fr (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_12')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_0_12')]),
            'name': 'Schaltuhr Lüftung Sa (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_12')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_1_12')]),
            'name': 'Schaltuhr Lüftung Sa (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_12')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_0_2_12')]),
            'name': 'Schaltuhr Lüftung Sa (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_1_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufWo_zeit_1_0_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufWo_zeit_1_0_0')]),
            'name': 'Schaltuhr Lüftung Woche Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_1_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufWo_zeit_1_1_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufWo_zeit_1_1_0')]),
            'name': 'Schaltuhr Lüftung Woche Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_1_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufWo_zeit_1_2_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufWo_zeit_1_2_0')]),
            'name': 'Schaltuhr Lüftung Woche Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_1_0_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_1_0_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_1_1_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_1_1_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_1_2_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_1_2_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_1_0_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_1_0_2')]),
            'name': 'Schaltuhr Lüftung Sa-So Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_1_1_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_1_1_2')]),
            'name': 'Schaltuhr Lüftung Sa-So Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLuf25_zeit_1_2_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLuf25_zeit_1_2_2')]),
            'name': 'Schaltuhr Lüftung Sa-So Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_0')]),
            'name': 'Schaltuhr Lüftung So Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_0')]),
            'name': 'Schaltuhr Lüftung So Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_0': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_0')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_0')]),
            'name': 'Schaltuhr Lüftung So Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_2')]),
            'name': 'Schaltuhr Lüftung Mo Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_2')]),
            'name': 'Schaltuhr Lüftung Mo Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_2': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_2')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_2')]),
            'name': 'Schaltuhr Lüftung Mo Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_4')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_4')]),
            'name': 'Schaltuhr Lüftung Di Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_4')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_4')]),
            'name': 'Schaltuhr Lüftung Di Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_4': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_4')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_4')]),
            'name': 'Schaltuhr Lüftung Di Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_6')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_6')]),
            'name': 'Schaltuhr Lüftung Mi Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_6')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_6')]),
            'name': 'Schaltuhr Lüftung Mi Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_6': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_6')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_6')]),
            'name': 'Schaltuhr Lüftung Mi Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_8')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_8')]),
            'name': 'Schaltuhr Lüftung Do Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_8')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_8')]),
            'name': 'Schaltuhr Lüftung Do Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_8': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_8')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_8')]),
            'name': 'Schaltuhr Lüftung Do Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_10')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_10')]),
            'name': 'Schaltuhr Lüftung Fr Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_10')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_10')]),
            'name': 'Schaltuhr Lüftung Fr Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_10': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_10')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_10')]),
            'name': 'Schaltuhr Lüftung Fr Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_12')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_0_12')]),
            'name': 'Schaltuhr Lüftung Sa Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_12')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_1_12')]),
            'name': 'Schaltuhr Lüftung Sa Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_12': {
            'rawvalue': values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_12')],
            'value': utils.createFromToTime(values[valueMap.get('ID_Einst_SuLufTg_zeit_1_2_12')]),
            'name': 'Schaltuhr Lüftung Sa Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivLueftung': {
            'rawvalue': values[valueMap.get('ID_FerienModusAktivLueftung')],
            'value': values[valueMap.get('ID_FerienModusAktivLueftung')],
            'name': 'Ferienmodus Lüftung',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BA_Lueftung_saved': {
            'rawvalue': values[valueMap.get('ID_Einst_BA_Lueftung_saved')],
            'value': values[valueMap.get('ID_Einst_BA_Lueftung_saved')],
            'name': 'Ferienmodus nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Party;3 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdLueftung': {
            'rawvalue': values[valueMap.get('ID_SU_FrkdLueftung')],
            'value': new Date(values[valueMap.get('ID_SU_FrkdLueftung')] * 1000).toUTCString(),
            'name': 'Lüftung - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdLueftung': {
            'rawvalue': values[valueMap.get('ID_SU_FstdLueftung')],
            'value':  new Date(values[valueMap.get('ID_SU_FstdLueftung')] * 1000).toUTCString(),
            'name': 'Lüftung - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Feuchteschutz_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Feuchteschutz_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Feuchteschutz_akt')],
            'name': 'Lüftung Feuchteschutz',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Einst_Luf_Reduziert_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Reduziert_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Reduziert_akt')],
            'name': 'Lüftung Reduziert',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Einst_Luf_Nennlueftung_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Nennlueftung_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Nennlueftung_akt')],
            'name': 'Lüftung Nennbetrieb',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Einst_Luf_Intensivlueftung_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Intensivlueftung_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Intensivlueftung_akt')],
            'name': 'Lüftung Intesivlüftung',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Timer_Fil_4Makt': {
            'rawvalue': values[valueMap.get('ID_Timer_Fil_4Makt')],
            'value': values[valueMap.get('ID_Timer_Fil_4Makt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_Fil_WoAkt': {
            'rawvalue': values[valueMap.get('ID_Timer_Fil_WoAkt')],
            'value': values[valueMap.get('ID_Timer_Fil_WoAkt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_KuCft3_akt': {
            'rawvalue': values[valueMap.get('ID_Sollwert_KuCft3_akt')],
            'value': values[valueMap.get('ID_Sollwert_KuCft3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_AtDif3_akt': {
            'rawvalue': values[valueMap.get('ID_Sollwert_AtDif3_akt')],
            'value': values[valueMap.get('ID_Sollwert_AtDif3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Bitmaske_0': {
            'rawvalue': values[valueMap.get('ID_Bitmaske_0')],
            'value': values[valueMap.get('ID_Bitmaske_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Lueftungsstufen': {
            'rawvalue': values[valueMap.get('ID_Einst_Lueftungsstufen')],
            'value': values[valueMap.get('ID_Einst_Lueftungsstufen')],
            'name': 'Lüftungsstufe',
            'calculationrule': '1 = 300m³/h;2 = 400m³/h',
            'unit': '',
			'writeable': false
		},
        'ID_SysEin_Meldung_TDI': {
            'rawvalue': values[valueMap.get('ID_SysEin_Meldung_TDI')],
            'value': values[valueMap.get('ID_SysEin_Meldung_TDI')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SysEin_Typ_WZW': {
            'rawvalue': values[valueMap.get('ID_SysEin_Typ_WZW')],
            'value': values[valueMap.get('ID_SysEin_Typ_WZW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BACnet_aktiviert': {
            'rawvalue': values[valueMap.get('ID_Einst_BACnet_aktiviert')],
            'value': values[valueMap.get('ID_Einst_BACnet_aktiviert')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BW_max': {
            'rawvalue': values[valueMap.get('ID_Einst_BW_max')],
            'value': values[valueMap.get('ID_Einst_BW_max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Sollwert_TRL_Kuehlen': {
            'rawvalue': values[valueMap.get('ID_Einst_Sollwert_TRL_Kuehlen')],
            'value': values[valueMap.get('ID_Einst_Sollwert_TRL_Kuehlen')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Medium_Waermequelle': {
            'rawvalue': values[valueMap.get('ID_Einst_Medium_Waermequelle')],
            'value': values[valueMap.get('ID_Einst_Medium_Waermequelle')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Photovoltaik_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Photovoltaik_akt')],
            'value': values[valueMap.get('ID_Einst_Photovoltaik_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Multispeicher_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Multispeicher_akt')],
            'value': values[valueMap.get('ID_Einst_Multispeicher_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_PKuehlTime_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_PKuehlTime_akt')],
            'value': values[valueMap.get('ID_Einst_PKuehlTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Minimale_Ruecklaufsolltemperatur': {
            'rawvalue': values[valueMap.get('ID_Einst_Minimale_Ruecklaufsolltemperatur')],
            'value': values[valueMap.get('ID_Einst_Minimale_Ruecklaufsolltemperatur')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Einflussfaktor_RT_akt': {
            'rawvalue': values[valueMap.get('ID_RBE_Einflussfaktor_RT_akt')],
            'value': values[valueMap.get('ID_RBE_Einflussfaktor_RT_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Freigabe_Kuehlung_akt': {
            'rawvalue': values[valueMap.get('ID_RBE_Freigabe_Kuehlung_akt')],
            'value': values[valueMap.get('ID_RBE_Freigabe_Kuehlung_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Waermeverteilsystem_akt': {
            'rawvalue': values[valueMap.get('ID_RBE_Waermeverteilsystem_akt')],
            'value': values[valueMap.get('ID_RBE_Waermeverteilsystem_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Zeit_Heizstab_aktiv': {
            'rawvalue': values[valueMap.get('ID_RBE_Zeit_Heizstab_aktiv')],
            'value': values[valueMap.get('ID_RBE_Zeit_Heizstab_aktiv')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SEC_ND_Alarmgrenze': {
            'rawvalue': values[valueMap.get('ID_SEC_ND_Alarmgrenze')],
            'value': values[valueMap.get('ID_SEC_ND_Alarmgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SEC_HD_Alarmgrenze': {
            'rawvalue': values[valueMap.get('ID_SEC_HD_Alarmgrenze')],
            'value': values[valueMap.get('ID_SEC_HD_Alarmgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SEC_Abtauendtemperatur': {
            'rawvalue': values[valueMap.get('ID_SEC_Abtauendtemperatur')],
            'value': values[valueMap.get('ID_SEC_Abtauendtemperatur')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Min_RPM_BW': {
            'rawvalue': values[valueMap.get('ID_Einst_Min_RPM_BW')],
            'value': values[valueMap.get('ID_Einst_Min_RPM_BW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Feuchteschutz_Faktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Feuchteschutz_Faktor_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Feuchteschutz_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Reduziert_Faktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Reduziert_Faktor_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Reduziert_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Nennlueftung_Faktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Nennlueftung_Faktor_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Nennlueftung_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Intensivlueftung_Faktor_akt': {
            'rawvalue': values[valueMap.get('ID_Einst_Luf_Intensivlueftung_Faktor_akt')],
            'value': values[valueMap.get('ID_Einst_Luf_Intensivlueftung_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Freigabe_Zeit_ZWE': {
            'rawvalue': values[valueMap.get('ID_Einst_Freigabe_Zeit_ZWE')],
            'value': values[valueMap.get('ID_Einst_Freigabe_Zeit_ZWE')],
            'name': 'Freigabe zweiter Wärmeerzeuger nach',
            'calculationrule': '',
            'unit': 'min',
			'writeable': false
		},
        'ID_Einst_min_VL_Kuehl': {
            'rawvalue': values[valueMap.get('ID_Einst_min_VL_Kuehl')],
            'value': values[valueMap.get('ID_Einst_min_VL_Kuehl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Warmwasser_Nachheizung': {
            'rawvalue': values[valueMap.get('ID_Einst_Warmwasser_Nachheizung')],
            'value': values[valueMap.get('ID_Einst_Warmwasser_Nachheizung')],
            'name': 'Trinkwarmwassertemperatur mit Nachheizung',
            'calculationrule': '',
            'unit': 'boolean',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_0_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_0_0')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_1_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_1_0')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_2_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_2_0')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_3_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_3_0')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_4_0': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_4_0')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_0_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_0_1')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_1_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_1_1')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_2_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_2_1')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_3_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_3_1')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_4_1': {
            'rawvalue': values[valueMap.get('ID_Switchoff_file_LWD2_4_1')],
            'value': values[valueMap.get('ID_Switchoff_file_LWD2_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_index_LWD2': {
            'rawvalue': values[valueMap.get('ID_Switchoff_index_LWD2')],
            'value': values[valueMap.get('ID_Switchoff_index_LWD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Nominal_2': {
            'rawvalue': values[valueMap.get('ID_Einst_Effizienzpumpe_Nominal_2')],
            'value': values[valueMap.get('ID_Einst_Effizienzpumpe_Nominal_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Minimal_2': {
            'rawvalue': values[valueMap.get('ID_Einst_Effizienzpumpe_Minimal_2')],
            'value': values[valueMap.get('ID_Einst_Effizienzpumpe_Minimal_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Versorgung_Korrektur_2': {
            'rawvalue': values[valueMap.get('ID_Einst_Wm_Versorgung_Korrektur_2')],
            'value': values[valueMap.get('ID_Einst_Wm_Versorgung_Korrektur_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Auswertung_Korrektur_2': {
            'rawvalue': values[valueMap.get('ID_Einst_Wm_Auswertung_Korrektur_2')],
            'value': values[valueMap.get('ID_Einst_Wm_Auswertung_Korrektur_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_isTwin': {
            'rawvalue': values[valueMap.get('ID_Einst_isTwin')],
            'value': values[valueMap.get('ID_Einst_isTwin')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAmin_2': {
            'rawvalue': values[valueMap.get('ID_Einst_TAmin_2')],
            'value': values[valueMap.get('ID_Einst_TAmin_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_2': {
            'rawvalue': values[valueMap.get('ID_Einst_TVLmax_2')],
            'value': values[valueMap.get('ID_Einst_TVLmax_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TA_EG_2': {
            'rawvalue': values[valueMap.get('ID_Einst_TA_EG_2')],
            'value': values[valueMap.get('ID_Einst_TA_EG_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_EG_2': {
            'rawvalue': values[valueMap.get('ID_Einst_TVLmax_EG_2')],
            'value': values[valueMap.get('ID_Einst_TVLmax_EG_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Hz_2': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_Hz_2')],
            'value': values[valueMap.get('ID_Waermemenge_Hz_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_BW_2': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_BW_2')],
            'value': values[valueMap.get('ID_Waermemenge_BW_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_SW_2': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_SW_2')],
            'value': values[valueMap.get('ID_Waermemenge_SW_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_ab_2': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_ab_2')],
            'value': values[valueMap.get('ID_Waermemenge_ab_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_15_2': {
            'rawvalue': values[valueMap.get('ID_Einst_Entl_Typ_15_2')],
            'value': values[valueMap.get('ID_Einst_Entl_Typ_15_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_WW_Nachheizung_max': {
            'rawvalue': values[valueMap.get('ID_Einst_WW_Nachheizung_max')],
            'value': (values[valueMap.get('ID_Einst_WW_Nachheizung_max')] + 2) / 2,
            'name': 'Warmwasser Nachheizung max',
            'calculationrule': '0 = 1h; 1 = 1,5h; 2 = 2h; 3 = 2,5h, ... 17 = 9,5h; 18 = 10h ==> (value + 2)/2',
            'unit': 'h',
			'writeable': false
		},
        'ID_Einst_Kuhl_Zeit_Ein_RT': {
            'rawvalue': values[valueMap.get('ID_Einst_Kuhl_Zeit_Ein_RT')],
            'value': values[valueMap.get('ID_Einst_Kuhl_Zeit_Ein_RT')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE1_Pos': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE1_Pos')],
            'value': values[valueMap.get('ID_Einst_ZWE1_Pos')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE2_Pos': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE2_Pos')],
            'value': values[valueMap.get('ID_Einst_ZWE2_Pos')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE3_Pos': {
            'rawvalue': values[valueMap.get('ID_Einst_ZWE3_Pos')],
            'value': values[valueMap.get('ID_Einst_ZWE3_Pos')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Leistung_ZWE': {
            'rawvalue': values[valueMap.get('ID_Einst_Leistung_ZWE')],
            'value': values[valueMap.get('ID_Einst_Leistung_ZWE')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN2_DATUM': {
            'rawvalue': values[valueMap.get('ID_WP_SN2_DATUM')],
            'value': values[valueMap.get('ID_WP_SN2_DATUM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN2_HEX': {
            'rawvalue': values[valueMap.get('ID_WP_SN2_HEX')],
            'value': values[valueMap.get('ID_WP_SN2_HEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN2_INDEX': {
            'rawvalue': values[valueMap.get('ID_WP_SN2_INDEX')],
            'value': values[valueMap.get('ID_WP_SN2_INDEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_CWP_saved2': {
            'rawvalue': values[valueMap.get('ID_CWP_saved2')],
            'value': values[valueMap.get('ID_CWP_saved2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SmartGrid': {
            'rawvalue': values[valueMap.get('ID_Einst_SmartGrid')],
            'value': values[valueMap.get('ID_Einst_SmartGrid')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_HDS': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_HDS')],
            'value': values[valueMap.get('ID_Einst_P155_HDS')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpHeat_Max': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpHeat_Max')],
            'value': values[valueMap.get('ID_Einst_P155_PumpHeat_Max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpHeatCtrl': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpHeatCtrl')],
            'value': values[valueMap.get('ID_Einst_P155_PumpHeatCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpDHWCtrl': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpDHWCtrl')],
            'value': values[valueMap.get('ID_Einst_P155_PumpDHWCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpDHW_RPM': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpDHW_RPM')],
            'value': values[valueMap.get('ID_Einst_P155_PumpDHW_RPM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpPoolCtrl': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpPoolCtrl')],
            'value': values[valueMap.get('ID_Einst_P155_PumpPoolCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpPool_RPM': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpPool_RPM')],
            'value': values[valueMap.get('ID_Einst_P155_PumpPool_RPM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpCool_RPM': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpCool_RPM')],
            'value': values[valueMap.get('ID_Einst_P155_PumpCool_RPM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpVBOCtrl': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpVBOCtrl')],
            'value': values[valueMap.get('ID_Einst_P155_PumpVBOCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpVBO_RPM_C': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpVBO_RPM_C')],
            'value': values[valueMap.get('ID_Einst_P155_PumpVBO_RPM_C')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpDHW_Max': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpDHW_Max')],
            'value': values[valueMap.get('ID_Einst_P155_PumpDHW_Max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpPool_Max': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_PumpPool_Max')],
            'value': values[valueMap.get('ID_Einst_P155_PumpPool_Max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_Sperrband_1': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_Sperrband_1')],
            'value': values[valueMap.get('ID_Einst_P155_Sperrband_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_Leistungsfreigabe': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_Leistungsfreigabe')],
            'value': values[valueMap.get('ID_Einst_P155_Leistungsfreigabe')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_DHW_Freq': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_DHW_Freq')],
            'value': values[valueMap.get('ID_Einst_P155_DHW_Freq')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SWHUP': {
            'rawvalue': values[valueMap.get('ID_Einst_SWHUP')],
            'value': values[valueMap.get('ID_Einst_SWHUP')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_SWB_Freq': {
            'rawvalue': values[valueMap.get('ID_Einst_P155_SWB_Freq')],
            'value': values[valueMap.get('ID_Einst_P155_SWB_Freq')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1_Regelung': {
            'rawvalue': values[valueMap.get('ID_Einst_MK1_Regelung')],
            'value': values[valueMap.get('ID_Einst_MK1_Regelung')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2_Regelung': {
            'rawvalue': values[valueMap.get('ID_Einst_MK2_Regelung')],
            'value': values[valueMap.get('ID_Einst_MK2_Regelung')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3_Regelung': {
            'rawvalue': values[valueMap.get('ID_Einst_MK3_Regelung')],
            'value': values[valueMap.get('ID_Einst_MK3_Regelung')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_PV_WW_Sperrzeit': {
            'rawvalue': values[valueMap.get('ID_Einst_PV_WW_Sperrzeit')],
            'value': values[valueMap.get('ID_Einst_PV_WW_Sperrzeit')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Warmwasser_extra': {
            'rawvalue': values[valueMap.get('ID_Einst_Warmwasser_extra')],
            'value': values[valueMap.get('ID_Einst_Warmwasser_extra')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorl_akt_Kuehl': {
            'rawvalue': values[valueMap.get('ID_Einst_Vorl_akt_Kuehl')],
            'value': values[valueMap.get('ID_Einst_Vorl_akt_Kuehl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN3_DATUM': {
            'rawvalue': values[valueMap.get('ID_WP_SN3_DATUM')],
            'value': values[valueMap.get('ID_WP_SN3_DATUM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN3_HEX': {
            'rawvalue': values[valueMap.get('ID_WP_SN3_HEX')],
            'value': values[valueMap.get('ID_WP_SN3_HEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN3_INDEX': {
            'rawvalue': values[valueMap.get('ID_WP_SN3_INDEX')],
            'value': values[valueMap.get('ID_WP_SN3_INDEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorlauf_ZUP': {
            'rawvalue': values[valueMap.get('ID_Einst_Vorlauf_ZUP')],
            'value': values[valueMap.get('ID_Einst_Vorlauf_ZUP')],
            'name': 'Vorlauf Zusatzumwälzpumpe',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Abtauen_im_Warmwasser': {
            'rawvalue': values[valueMap.get('ID_Einst_Abtauen_im_Warmwasser')],
            'value': values[valueMap.get('ID_Einst_Abtauen_im_Warmwasser')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_ZWE': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_ZWE')],
            'value': values[valueMap.get('ID_Waermemenge_ZWE')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Reset': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_Reset')],
            'value': values[valueMap.get('ID_Waermemenge_Reset')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Reset_2': {
            'rawvalue': values[valueMap.get('ID_Waermemenge_Reset_2')],
            'value': values[valueMap.get('ID_Waermemenge_Reset_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'AnzahlParameterInit': {
            'rawvalue': values[valueMap.get('AnzahlParameterInit')],
            'value': values[valueMap.get('AnzahlParameterInit')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1063': {
            'rawvalue': values[valueMap.get('1063')],
            'value': values[valueMap.get('1063')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1064': {
            'rawvalue': values[valueMap.get('1064')],
            'value': values[valueMap.get('1064')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1065': {
            'rawvalue': values[valueMap.get('1065')],
            'value': values[valueMap.get('1065')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1066': {
            'rawvalue': values[valueMap.get('1066')],
            'value': values[valueMap.get('1066')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1067': {
            'rawvalue': values[valueMap.get('1067')],
            'value': values[valueMap.get('1067')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1068': {
            'rawvalue': values[valueMap.get('1068')],
            'value': values[valueMap.get('1068')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1069': {
            'rawvalue': values[valueMap.get('1069')],
            'value': values[valueMap.get('1069')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1070': {
            'rawvalue': values[valueMap.get('1070')],
            'value': values[valueMap.get('1070')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1071': {
            'rawvalue': values[valueMap.get('1071')],
            'value': values[valueMap.get('1071')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1072': {
            'rawvalue': values[valueMap.get('1072')],
            'value': values[valueMap.get('1072')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1073': {
            'rawvalue': values[valueMap.get('1073')],
            'value': values[valueMap.get('1073')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1074': {
            'rawvalue': values[valueMap.get('1074')],
            'value': values[valueMap.get('1074')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1075': {
            'rawvalue': values[valueMap.get('1075')],
            'value': values[valueMap.get('1075')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1076': {
            'rawvalue': values[valueMap.get('1076')],
            'value': values[valueMap.get('1076')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1077': {
            'rawvalue': values[valueMap.get('1077')],
            'value': values[valueMap.get('1077')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1078': {
            'rawvalue': values[valueMap.get('1078')],
            'value': values[valueMap.get('1078')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1079': {
            'rawvalue': values[valueMap.get('1079')],
            'value': values[valueMap.get('1079')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1080': {
            'rawvalue': values[valueMap.get('1080')],
            'value': values[valueMap.get('1080')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1081': {
            'rawvalue': values[valueMap.get('1081')],
            'value': values[valueMap.get('1081')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1082': {
            'rawvalue': values[valueMap.get('1082')],
            'value': values[valueMap.get('1082')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1083': {
            'rawvalue': values[valueMap.get('1083')],
            'value': values[valueMap.get('1083')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1084': {
            'rawvalue': values[valueMap.get('1084')],
            'value': values[valueMap.get('1084')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1085': {
            'rawvalue': values[valueMap.get('1085')],
            'value': values[valueMap.get('1085')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
   };
}
function getDeprecatedValues(heatpumpParameters, heatpumpVisibility) {
    return {
        'heating_temperature': heatpumpParameters[1] / 10, // #54 - returnTemperatureSetBack
        'warmwater_temperature': heatpumpParameters[2] / 10,
        'heating_operation_mode': heatpumpParameters[3], // #10
        'warmwater_operation_mode': heatpumpParameters[4], // #7

        'heating_operation_mode_string': utils.createOperationStateString(heatpumpParameters[3]),
        'warmwater_operation_mode_string': utils.createOperationStateString(heatpumpParameters[4]),

        'heating_curve_end_point': (heatpumpVisibility[207] === 1) ? heatpumpParameters[11] / 10 : 'no', // #69
        'heating_curve_parallel_offset': (heatpumpVisibility[207] === 1) ? heatpumpParameters[12] / 10 : 'no', // #70
        'deltaHeatingReduction': heatpumpParameters[13] / 10, // #47

        'heatSourcedefrostAirThreshold': (heatpumpVisibility[97] === 1) ? heatpumpParameters[44] / 10 : 'no', // #71

        'hotWaterTemperatureHysterese': heatpumpParameters[74] / 10, // #49

        'returnTempHyst': (heatpumpVisibility[93] === 1) ? heatpumpParameters[88] / 10 : 'no', // #68

        'heatSourcedefrostAirEnd': (heatpumpVisibility[105] === 1) ? heatpumpParameters[98] / 10 : 'no', // #72

        'temperature_hot_water_target': heatpumpParameters[105] / 10,

        'cooling_operation_mode': heatpumpParameters[108],

        'cooling_release_temperature': heatpumpParameters[110] / 10,
        'thresholdTemperatureSetBack': heatpumpParameters[111] / 10, // #48

        'cooling_inlet_temp': heatpumpParameters[132] / 10,

        'hotWaterCircPumpDeaerate': (heatpumpVisibility[167] === 1) ? heatpumpParameters[684] : 'no', // #61

        'heatingLimit': heatpumpParameters[699], // #11
        'thresholdHeatingLimit': heatpumpParameters[700] / 10, // #21

        'cooling_start_after_hours': heatpumpParameters[850],
        'cooling_stop_after_hours': heatpumpParameters[851],

        'typeSerial': heatpumpParameters[874].toString().substr(0, 4) + '/' + heatpumpParameters[874].toString().substr(4) + '-' + heatpumpParameters[875].toString(16).toUpperCase(),

        'returnTemperatureTargetMin': heatpumpParameters[979] / 10 // #63

        // "possible_temperature_hot_water_limit1": heatpumpParameters[47] / 10,
        // "possible_temperature_hot_water_limit2": heatpumpParameters[84] / 10,
        // "possible_temperature_hot_water_limit3": heatpumpParameters[973] / 10,
    };
}

module.exports =  {
    valueMap,
    getMappedValues,
    getDeprecatedValues
};