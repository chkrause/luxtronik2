const utils = require('../utils');

/**
 *  Constant heatpumpParameterMap descrips the mapping Array index and descriptive name of this value.
 */
const heatpumpParameterMap = new Map();
    heatpumpParameterMap.set('ID_Transfert_LuxNet',0);
    heatpumpParameterMap.set('ID_Einst_WK_akt',1);
    heatpumpParameterMap.set('ID_Einst_BWS_akt',2);
    heatpumpParameterMap.set('ID_Ba_Hz_akt',3);
    heatpumpParameterMap.set('ID_Ba_Bw_akt',4);
    heatpumpParameterMap.set('ID_Ba_Al_akt',5);
    heatpumpParameterMap.set('ID_SU_FrkdHz',6);
    heatpumpParameterMap.set('ID_SU_FrkdBw',7);
    heatpumpParameterMap.set('ID_SU_FrkdAl',8);
    heatpumpParameterMap.set('ID_Einst_HReg_akt',9);
    heatpumpParameterMap.set('ID_Einst_HzHwMAt_akt',10);
    heatpumpParameterMap.set('ID_Einst_HzHwHKE_akt',11);
    heatpumpParameterMap.set('ID_Einst_HzHKRANH_akt',12);
    heatpumpParameterMap.set('ID_Einst_HzHKRABS_akt',13);
    heatpumpParameterMap.set('ID_Einst_HzMK1E_akt',14);
    heatpumpParameterMap.set('ID_Einst_HzMK1ANH_akt',15);
    heatpumpParameterMap.set('ID_Einst_HzMK1ABS_akt',16);
    heatpumpParameterMap.set('ID_Einst_HzFtRl_akt',17);
    heatpumpParameterMap.set('ID_Einst_HzFtMK1Vl_akt',18);
    heatpumpParameterMap.set('ID_Einst_SUBW_akt',19);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_MO',20);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_DI',21);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_MI',22);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_DO',23);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_FR',24);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_SA',25);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_SO',26);
    heatpumpParameterMap.set('ID_Einst_BwTDI_akt_AL',27);
    heatpumpParameterMap.set('ID_Einst_AnlKonf_akt',28);
    heatpumpParameterMap.set('ID_Einst_Sprache_akt',29);
    heatpumpParameterMap.set('ID_Switchoff_Zahler',30);
    heatpumpParameterMap.set('ID_Switchoff_index',31);
    heatpumpParameterMap.set('ID_Einst_EvuTyp_akt',32);
    heatpumpParameterMap.set('ID_Einst_RFVEinb_akt',33);
    heatpumpParameterMap.set('ID_Einst_AbtZykMax_akt',34);
    heatpumpParameterMap.set('ID_Einst_HREinb_akt',35);
    heatpumpParameterMap.set('ID_Einst_ZWE1Art_akt',36);
    heatpumpParameterMap.set('ID_Einst_ZWE1Fkt_akt',37);
    heatpumpParameterMap.set('ID_Einst_ZWE2Art_akt',38);
    heatpumpParameterMap.set('ID_Einst_ZWE2Fkt_akt',39);
    heatpumpParameterMap.set('ID_Einst_BWBer_akt',40);
    heatpumpParameterMap.set('ID_Einst_En_Inst',41);
    heatpumpParameterMap.set('ID_Einst_MK1Typ_akt',42);
    heatpumpParameterMap.set('ID_Einst_ABTLuft_akt',43);
    heatpumpParameterMap.set('ID_Einst_TLAbt_akt',44);
    heatpumpParameterMap.set('ID_Einst_LAbtTime_akt',45);
    heatpumpParameterMap.set('ID_Einst_ASDTyp_akt',46);
    heatpumpParameterMap.set('ID_Einst_LGST_akt',47);
    heatpumpParameterMap.set('ID_Einst_BwWpTime_akt',48);
    heatpumpParameterMap.set('ID_Einst_Popt_akt',49);
    heatpumpParameterMap.set('ID_Einst_Kurzprog_akt',50);
    heatpumpParameterMap.set('ID_Timer_Kurzprog_akt',51);
    heatpumpParameterMap.set('ID_Einst_ManAbt_akt',52);
    heatpumpParameterMap.set('ID_Einst_Ahz_akt',53);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_1',54);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_2',55);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_3',56);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_4',57);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_5',58);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_6',59);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_7',60);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_8',61);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_9',62);
    heatpumpParameterMap.set('ID_Einst_TVL_Ahz_10',63);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_1',64);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_2',65);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_3',66);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_4',67);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_5',68);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_6',69);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_7',70);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_8',71);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_9',72);
    heatpumpParameterMap.set('ID_Einst_TVL_Std_10',73);
    heatpumpParameterMap.set('ID_Einst_BWS_Hyst_akt',74);
    heatpumpParameterMap.set('ID_Temp_TBW_BwHD_saved',75);
    heatpumpParameterMap.set('ID_Einst_ABT1_akt',76);
    heatpumpParameterMap.set('ID_Einst_LABTpaus_akt',77);
    heatpumpParameterMap.set('ID_AHZ_state_akt',78);
    heatpumpParameterMap.set('ID_Sollwert_TRL_HZ_AHZ',79);
    heatpumpParameterMap.set('ID_AHP_valid_records',80);
    heatpumpParameterMap.set('ID_Timer_AHZ_akt',81);
    heatpumpParameterMap.set('ID_Einst_BWTINP_akt',82);
    heatpumpParameterMap.set('ID_Einst_ZUPTYP_akt',83);
    heatpumpParameterMap.set('ID_Sollwert_TLG_max',84);
    heatpumpParameterMap.set('ID_Einst_BWZIP_akt',85);
    heatpumpParameterMap.set('ID_Einst_ERRmZWE_akt',86);
    heatpumpParameterMap.set('ID_Einst_TRBegr_akt',87);
    heatpumpParameterMap.set('ID_Einst_HRHyst_akt',88);
    heatpumpParameterMap.set('ID_Einst_TRErhmax_akt',89);
    heatpumpParameterMap.set('ID_Einst_ZWEFreig_akt',90);
    heatpumpParameterMap.set('ID_Einst_TAmax_akt',91);
    heatpumpParameterMap.set('ID_Einst_TAmin_akt',92);
    heatpumpParameterMap.set('ID_Einst_TWQmin_akt',93);
    heatpumpParameterMap.set('ID_Einst_THGmax_akt',94);
    heatpumpParameterMap.set('ID_Einst_FRGT2VD_akt',95);
    heatpumpParameterMap.set('ID_Einst_TV2VDBW_akt',96);
    heatpumpParameterMap.set('ID_Einst_SuAll_akt',97);
    heatpumpParameterMap.set('ID_Einst_TAbtEnd_akt',98);
    heatpumpParameterMap.set('ID_Einst_NrKlingel_akt',99);
    heatpumpParameterMap.set('ID_Einst_BWStyp_akt',100);
    heatpumpParameterMap.set('ID_Einst_ABT2_akt',101);
    heatpumpParameterMap.set('ID_Einst_UeVd_akt',102);
    heatpumpParameterMap.set('ID_Einst_RTyp_akt',103);
    heatpumpParameterMap.set('ID_Einst_AhpM_akt',104);
    heatpumpParameterMap.set('ID_Soll_BWS_akt',105);
    heatpumpParameterMap.set('ID_Timer_Password',106);
    heatpumpParameterMap.set('ID_Einst_Zugangscode',107);
    heatpumpParameterMap.set('ID_Einst_BA_Kuehl_akt',108);
    heatpumpParameterMap.set('ID_Sollwert_Kuehl1_akt',109);
    heatpumpParameterMap.set('ID_Einst_KuehlFreig_akt',110);
    heatpumpParameterMap.set('ID_Einst_TAbsMin_akt',111);
    heatpumpParameterMap.set('ID_TWQmin_saved',112);
    heatpumpParameterMap.set('ID_CWP_saved',113);
    heatpumpParameterMap.set('ID_Einst_Anode_akt',114);
    heatpumpParameterMap.set('ID_Timer_pexoff_akt',115);
    heatpumpParameterMap.set('ID_Einst_AnlPrio_Hzakt',116);
    heatpumpParameterMap.set('ID_Einst_AnlPrio_Bwakt',117);
    heatpumpParameterMap.set('ID_Einst_AnlPrio_Swakt',118);
    heatpumpParameterMap.set('ID_Ba_Sw_akt',119);
    heatpumpParameterMap.set('ID_Einst_RTypMK1_akt',120);
    heatpumpParameterMap.set('ID_Einst_RTypMK2_akt',121);
    heatpumpParameterMap.set('ID_Einst_TDC_Ein_akt',122);
    heatpumpParameterMap.set('ID_Einst_TDC_Aus_akt',123);
    heatpumpParameterMap.set('ID_Einst_TDC_Max_akt',124);
    heatpumpParameterMap.set('ID_Einst_HysHzExEn_akt',125);
    heatpumpParameterMap.set('ID_Einst_HysBwExEn_akt',126);
    heatpumpParameterMap.set('ID_Einst_ZWE3Art_akt',127);
    heatpumpParameterMap.set('ID_Einst_ZWE3Fkt_akt',128);
    heatpumpParameterMap.set('ID_Einst_HzSup_akt',129);
    heatpumpParameterMap.set('ID_Einst_MK2Typ_akt',130);
    heatpumpParameterMap.set('ID_Einst_KuTyp_akt',131);
    heatpumpParameterMap.set('ID_Sollwert_KuCft1_akt',132);
    heatpumpParameterMap.set('ID_Sollwert_KuCft2_akt',133);
    heatpumpParameterMap.set('ID_Sollwert_AtDif1_akt',134);
    heatpumpParameterMap.set('ID_Sollwert_AtDif2_akt',135);
    heatpumpParameterMap.set('ID_SU_FrkdSwb',136);
    heatpumpParameterMap.set('ID_Einst_SwbBer_akt',137);
    heatpumpParameterMap.set('ID_Einst_TV2VDSWB_akt',138);
    heatpumpParameterMap.set('ID_Einst_MinSwan_Time_akt',139);
    heatpumpParameterMap.set('ID_Einst_SuMk2_akt',140);
    heatpumpParameterMap.set('ID_Einst_HzMK2E_akt',141);
    heatpumpParameterMap.set('ID_Einst_HzMK2ANH_akt',142);
    heatpumpParameterMap.set('ID_Einst_HzMK2ABS_akt',143);
    heatpumpParameterMap.set('ID_Einst_HzMK2Hgr_akt',144);
    heatpumpParameterMap.set('ID_Einst_HzFtMK2Vl_akt',145);
    heatpumpParameterMap.set('ID_Temp_THG_BwHD_saved',146);
    heatpumpParameterMap.set('ID_Temp_TA_BwHD_saved',147);
    heatpumpParameterMap.set('ID_Einst_BwHup_akt',148);
    heatpumpParameterMap.set('ID_Einst_TVLmax_akt',149);
    heatpumpParameterMap.set('ID_Einst_MK1LzFaktor_akt',150);
    heatpumpParameterMap.set('ID_Einst_MK2LzFaktor_akt',151);
    heatpumpParameterMap.set('ID_Einst_MK1PerFaktor_akt',152);
    heatpumpParameterMap.set('ID_Einst_MK2PerFaktor_akt',153);
    heatpumpParameterMap.set('ID_Entl_Zyklus_akt',154);
    heatpumpParameterMap.set('ID_Einst_Entl_time_akt',155);
    heatpumpParameterMap.set('ID_Entl_Pause',156);
    heatpumpParameterMap.set('ID_Entl_timer',157);
    heatpumpParameterMap.set('ID_Einst_Entl_akt',158);
    heatpumpParameterMap.set('ID_Ahz_HLeist_confirmed',159);
    heatpumpParameterMap.set('ID_FirstInit_akt',160);
    heatpumpParameterMap.set('ID_Einst_SuAll_akt2',161);
    heatpumpParameterMap.set('ID_Einst_SuAllWo_zeit_0_0',162);
    heatpumpParameterMap.set('ID_Einst_SuAllWo_zeit_0_1',163);
    heatpumpParameterMap.set('ID_Einst_SuAllWo_zeit_1_0',164);
    heatpumpParameterMap.set('ID_Einst_SuAllWo_zeit_1_1',165);
    heatpumpParameterMap.set('ID_Einst_SuAllWo_zeit_2_0',166);
    heatpumpParameterMap.set('ID_Einst_SuAllWo_zeit_2_1',167);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_0_0',168);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_0_1',169);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_1_0',170);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_1_1',171);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_2_0',172);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_2_1',173);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_0_2',174);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_0_3',175);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_1_2',176);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_1_3',177);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_2_2',178);
    heatpumpParameterMap.set('ID_Einst_SuAll25_zeit_2_3',179);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_0',180);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_1',181);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_0',182);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_1',183);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_0',184);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_1',185);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_2',186);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_3',187);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_2',188);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_3',189);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_2',190);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_3',191);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_4',192);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_5',193);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_4',194);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_5',195);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_4',196);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_5',197);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_6',198);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_7',199);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_6',200);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_7',201);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_6',202);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_7',203);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_8',204);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_9',205);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_8',206);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_9',207);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_8',208);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_9',209);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_10',210);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_11',211);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_10',212);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_11',213);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_10',214);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_11',215);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_12',216);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_0_13',217);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_12',218);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_1_13',219);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_12',220);
    heatpumpParameterMap.set('ID_Einst_SuAllTg_zeit_2_13',221);
    heatpumpParameterMap.set('ID_Einst_SuHkr_akt',222);
    heatpumpParameterMap.set('ID_Einst_SuHkrW0_zeit_0_0',223);
    heatpumpParameterMap.set('ID_Einst_SuHkrW0_zeit_0_1',224);
    heatpumpParameterMap.set('ID_Einst_SuHkrW0_zeit_1_0',225);
    heatpumpParameterMap.set('ID_Einst_SuHkrW0_zeit_1_1',226);
    heatpumpParameterMap.set('ID_Einst_SuHkrW0_zeit_2_0',227);
    heatpumpParameterMap.set('ID_Einst_SuHkrW0_zeit_2_1',228);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_0_0',229);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_0_1',230);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_1_0',231);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_1_1',232);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_2_0',233);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_2_1',234);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_0_2',235);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_0_3',236);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_1_2',237);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_1_3',238);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_2_2',239);
    heatpumpParameterMap.set('ID_Einst_SuHkr25_zeit_2_3',240);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_0',241);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_1',242);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_0',243);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_1',244);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_0',245);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_1',246);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_2',247);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_3',248);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_2',249);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_3',250);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_2',251);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_3',252);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_4',253);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_5',254);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_4',255);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_5',256);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_4',257);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_5',258);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_6',259);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_7',260);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_6',261);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_7',262);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_6',263);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_7',264);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_8',265);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_9',266);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_8',267);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_9',268);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_8',269);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_9',270);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_10',271);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_11',272);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_10',273);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_11',274);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_10',275);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_11',276);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_12',277);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_0_13',278);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_12',279);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_1_13',280);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_12',281);
    heatpumpParameterMap.set('ID_Einst_SuHkrTG_zeit_2_13',282);
    heatpumpParameterMap.set('ID_Einst_SuMk1_akt',283);
    heatpumpParameterMap.set('ID_Einst_SuMk1W0_zeit_0_0',284);
    heatpumpParameterMap.set('ID_Einst_SuMk1W0_zeit_0_1',285);
    heatpumpParameterMap.set('ID_Einst_SuMk1W0_zeit_1_0',286);
    heatpumpParameterMap.set('ID_Einst_SuMk1W0_zeit_1_1',287);
    heatpumpParameterMap.set('ID_Einst_SuMk1W0_zeit_2_0',288);
    heatpumpParameterMap.set('ID_Einst_SuMk1W0_zeit_2_1',289);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_0_0',290);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_0_1',291);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_1_0',292);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_1_1',293);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_2_0',294);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_2_1',295);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_0_2',296);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_0_3',297);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_1_2',298);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_1_3',299);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_2_2',300);
    heatpumpParameterMap.set('ID_Einst_SuMk125_zeit_2_3',301);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_0',302);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_1',303);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_0',304);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_1',305);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_0',306);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_1',307);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_2',308);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_3',309);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_2',310);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_3',311);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_2',312);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_3',313);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_4',314);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_5',315);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_4',316);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_5',317);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_4',318);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_5',319);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_6',320);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_7',321);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_6',322);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_7',323);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_6',324);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_7',325);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_8',326);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_9',327);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_8',328);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_9',329);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_8',330);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_9',331);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_10',332);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_11',333);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_10',334);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_11',335);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_10',336);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_11',337);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_12',338);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_0_13',339);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_12',340);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_1_13',341);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_12',342);
    heatpumpParameterMap.set('ID_Einst_SuMk1TG_zeit_2_13',343);
    heatpumpParameterMap.set('ID_Einst_SuMk2_akt2',344);
    heatpumpParameterMap.set('ID_Einst_SuMk2Wo_zeit_0_0',345);
    heatpumpParameterMap.set('ID_Einst_SuMk2Wo_zeit_0_1',346);
    heatpumpParameterMap.set('ID_Einst_SuMk2Wo_zeit_1_0',347);
    heatpumpParameterMap.set('ID_Einst_SuMk2Wo_zeit_1_1',348);
    heatpumpParameterMap.set('ID_Einst_SuMk2Wo_zeit_2_0',349);
    heatpumpParameterMap.set('ID_Einst_SuMk2Wo_zeit_2_1',350);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_0_0',351);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_0_1',352);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_1_0',353);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_1_1',354);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_2_0',355);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_2_1',356);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_0_2',357);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_0_3',358);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_1_2',359);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_1_3',360);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_2_2',361);
    heatpumpParameterMap.set('ID_Einst_SuMk225_zeit_2_3',362);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_0',363);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_1',364);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_0',365);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_1',366);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_0',367);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_1',368);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_2',369);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_3',370);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_2',371);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_3',372);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_2',373);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_3',374);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_4',375);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_5',376);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_4',377);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_5',378);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_4',379);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_5',380);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_6',381);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_7',382);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_6',383);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_7',384);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_6',385);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_7',386);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_8',387);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_9',388);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_8',389);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_9',390);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_8',391);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_9',392);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_10',393);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_11',394);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_10',395);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_11',396);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_10',397);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_11',398);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_12',399);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_0_13',400);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_12',401);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_1_13',402);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_12',403);
    heatpumpParameterMap.set('ID_Einst_SuMk2Tg_zeit_2_13',404);
    heatpumpParameterMap.set('ID_Einst_SUBW_akt2',405);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_0_0',406);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_0_1',407);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_1_0',408);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_1_1',409);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_2_0',410);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_2_1',411);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_3_0',412);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_3_1',413);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_4_0',414);
    heatpumpParameterMap.set('ID_Einst_SuBwWO_zeit_4_1',415);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_0_0',416);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_0_1',417);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_1_0',418);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_1_1',419);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_2_0',420);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_2_1',421);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_3_0',422);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_3_1',423);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_4_0',424);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_4_1',425);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_0_2',426);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_0_3',427);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_1_2',428);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_1_3',429);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_2_2',430);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_2_3',431);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_3_2',432);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_3_3',433);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_4_2',434);
    heatpumpParameterMap.set('ID_Einst_SuBw25_zeit_4_3',435);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_0',436);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_1',437);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_0',438);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_1',439);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_0',440);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_1',441);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_0',442);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_1',443);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_0',444);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_1',445);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_2',446);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_3',447);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_2',448);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_3',449);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_2',450);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_3',451);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_2',452);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_3',453);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_2',454);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_3',455);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_4',456);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_5',457);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_4',458);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_5',459);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_4',460);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_5',461);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_4',462);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_5',463);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_4',464);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_5',465);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_6',466);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_7',467);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_6',468);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_7',469);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_6',470);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_7',471);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_6',472);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_7',473);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_6',474);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_7',475);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_8',476);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_9',477);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_8',478);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_9',479);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_8',480);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_9',481);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_8',482);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_9',483);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_8',484);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_9',485);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_10',486);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_11',487);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_10',488);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_11',489);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_10',490);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_11',491);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_10',492);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_11',493);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_10',494);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_11',495);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_12',496);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_0_13',497);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_12',498);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_1_13',499);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_12',500);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_2_13',501);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_12',502);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_3_13',503);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_12',504);
    heatpumpParameterMap.set('ID_Einst_SuBwTG_zeit_4_13',505);
    heatpumpParameterMap.set('ID_Einst_SuZIP_akt',506);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_0_0',507);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_0_1',508);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_1_0',509);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_1_1',510);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_2_0',511);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_2_1',512);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_3_0',513);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_3_1',514);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_4_0',515);
    heatpumpParameterMap.set('ID_Einst_SuZIPWo_zeit_4_1',516);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_0_0',517);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_0_1',518);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_1_0',519);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_1_1',520);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_2_0',521);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_2_1',522);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_3_0',523);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_3_1',524);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_4_0',525);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_4_1',526);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_0_2',527);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_0_3',528);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_1_2',529);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_1_3',530);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_2_2',531);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_2_3',532);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_3_2',533);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_3_3',534);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_4_2',535);
    heatpumpParameterMap.set('ID_Einst_SuZIP25_zeit_4_3',536);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_0',537);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_1',538);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_0',539);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_1',540);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_0',541);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_1',542);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_0',543);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_1',544);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_0',545);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_1',546);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_2',547);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_3',548);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_2',549);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_3',550);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_2',551);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_3',552);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_2',553);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_3',554);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_2',555);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_3',556);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_4',557);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_5',558);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_4',559);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_5',560);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_4',561);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_5',562);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_4',563);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_5',564);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_4',565);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_5',566);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_6',567);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_7',568);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_6',569);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_7',570);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_6',571);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_7',572);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_6',573);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_7',574);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_6',575);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_7',576);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_8',577);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_9',578);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_8',579);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_9',580);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_8',581);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_9',582);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_8',583);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_9',584);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_8',585);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_9',586);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_10',587);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_11',588);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_10',589);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_11',590);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_10',591);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_11',592);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_10',593);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_11',594);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_10',595);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_11',596);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_12',597);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_0_13',598);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_12',599);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_1_13',600);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_12',601);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_2_13',602);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_12',603);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_3_13',604);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_12',605);
    heatpumpParameterMap.set('ID_Einst_SuZIPTg_zeit_4_13',606);
    heatpumpParameterMap.set('ID_Einst_SuSwb_akt',607);
    heatpumpParameterMap.set('ID_Einst_SuSwbWo_zeit_0_0',608);
    heatpumpParameterMap.set('ID_Einst_SuSwbWo_zeit_0_1',609);
    heatpumpParameterMap.set('ID_Einst_SuSwbWo_zeit_1_0',610);
    heatpumpParameterMap.set('ID_Einst_SuSwbWo_zeit_1_1',611);
    heatpumpParameterMap.set('ID_Einst_SuSwbWo_zeit_2_0',612);
    heatpumpParameterMap.set('ID_Einst_SuSwbWo_zeit_2_1',613);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_0_0',614);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_0_1',615);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_1_0',616);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_1_1',617);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_2_0',618);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_2_1',619);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_0_2',620);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_0_3',621);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_1_2',622);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_1_3',623);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_2_2',624);
    heatpumpParameterMap.set('ID_Einst_SuSwb25_zeit_2_3',625);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_0',626);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_1',627);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_0',628);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_1',629);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_0',630);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_1',631);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_2',632);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_3',633);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_2',634);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_3',635);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_2',636);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_3',637);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_4',638);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_5',639);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_4',640);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_5',641);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_4',642);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_5',643);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_6',644);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_7',645);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_6',646);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_7',647);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_6',648);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_7',649);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_8',650);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_9',651);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_8',652);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_9',653);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_8',654);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_9',655);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_10',656);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_11',657);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_10',658);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_11',659);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_10',660);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_11',661);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_12',662);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_0_13',663);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_12',664);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_1_13',665);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_12',666);
    heatpumpParameterMap.set('ID_Einst_SuSwbTg_zeit_2_13',667);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitWP',668);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitVD1',669);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitVD2',670);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitZWE1',671);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitZWE2',672);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitZWE3',673);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitImpVD1',674);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitImpVD2',675);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitEZMVD1',676);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitEZMVD2',677);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_0',678);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_1',679);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_2',680);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_3',681);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_4',682);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_5',683);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_6',684);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_7',685);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_8',686);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_9',687);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_10',688);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_11',689);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_12',690);
    heatpumpParameterMap.set('ID_Einst_Vorl_max_MK1',691);
    heatpumpParameterMap.set('ID_Einst_Vorl_max_MK2',692);
    heatpumpParameterMap.set('ID_SU_FrkdMK1',693);
    heatpumpParameterMap.set('ID_SU_FrkdMK2',694);
    heatpumpParameterMap.set('ID_Ba_Hz_MK1_akt',695);
    heatpumpParameterMap.set('ID_Ba_Hz_MK2_akt',696);
    heatpumpParameterMap.set('ID_Einst_Zirk_Ein_akt',697);
    heatpumpParameterMap.set('ID_Einst_Zirk_Aus_akt',698);
    heatpumpParameterMap.set('ID_Einst_Heizgrenze',699);
    heatpumpParameterMap.set('ID_Einst_Heizgrenze_Temp',700);
    heatpumpParameterMap.set('ID_VariablenIBNgespeichert',701);
    heatpumpParameterMap.set('ID_SchonIBNAssistant',702);
    heatpumpParameterMap.set('ID_Heizgrenze_0',703);
    heatpumpParameterMap.set('ID_Heizgrenze_1',704);
    heatpumpParameterMap.set('ID_Heizgrenze_2',705);
    heatpumpParameterMap.set('ID_Heizgrenze_3',706);
    heatpumpParameterMap.set('ID_Heizgrenze_4',707);
    heatpumpParameterMap.set('ID_Heizgrenze_5',708);
    heatpumpParameterMap.set('ID_Heizgrenze_6',709);
    heatpumpParameterMap.set('ID_Heizgrenze_7',710);
    heatpumpParameterMap.set('ID_Heizgrenze_8',711);
    heatpumpParameterMap.set('ID_Heizgrenze_9',712);
    heatpumpParameterMap.set('ID_Heizgrenze_10',713);
    heatpumpParameterMap.set('ID_Heizgrenze_11',714);
    heatpumpParameterMap.set('ID_SchemenIBNgewahlt',715);
    heatpumpParameterMap.set('ID_Switchoff_file_0_0',716);
    heatpumpParameterMap.set('ID_Switchoff_file_1_0',717);
    heatpumpParameterMap.set('ID_Switchoff_file_2_0',718);
    heatpumpParameterMap.set('ID_Switchoff_file_3_0',719);
    heatpumpParameterMap.set('ID_Switchoff_file_4_0',720);
    heatpumpParameterMap.set('ID_Switchoff_file_0_1',721);
    heatpumpParameterMap.set('ID_Switchoff_file_1_1',722);
    heatpumpParameterMap.set('ID_Switchoff_file_2_1',723);
    heatpumpParameterMap.set('ID_Switchoff_file_3_1',724);
    heatpumpParameterMap.set('ID_Switchoff_file_4_1',725);
    heatpumpParameterMap.set('ID_DauerDatenLoggerAktiv',726);
    heatpumpParameterMap.set('ID_Laufvar_Heizgrenze',727);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitHz',728);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitBW',729);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitKue',730);
    heatpumpParameterMap.set('ID_SU_FstdHz',731);
    heatpumpParameterMap.set('ID_SU_FstdBw',732);
    heatpumpParameterMap.set('ID_SU_FstdSwb',733);
    heatpumpParameterMap.set('ID_SU_FstdMK1',734);
    heatpumpParameterMap.set('ID_SU_FstdMK2',735);
    heatpumpParameterMap.set('ID_FerienAbsenkungHz',736);
    heatpumpParameterMap.set('ID_FerienAbsenkungMK1',737);
    heatpumpParameterMap.set('ID_FerienAbsenkungMK2',738);
    heatpumpParameterMap.set('ID_FerienModusAktivHz',739);
    heatpumpParameterMap.set('ID_FerienModusAktivBw',740);
    heatpumpParameterMap.set('ID_FerienModusAktivSwb',741);
    heatpumpParameterMap.set('ID_FerienModusAktivMk1',742);
    heatpumpParameterMap.set('ID_FerienModusAktivMk2',743);
    heatpumpParameterMap.set('ID_DisplayContrast_akt',744);
    heatpumpParameterMap.set('ID_Ba_Hz_saved',745);
    heatpumpParameterMap.set('ID_Ba_Bw_saved',746);
    heatpumpParameterMap.set('ID_Ba_Sw_saved',747);
    heatpumpParameterMap.set('ID_Ba_Hz_MK1_saved',748);
    heatpumpParameterMap.set('ID_Ba_Hz_MK2_saved',749);
    heatpumpParameterMap.set('ID_AdresseIP_akt',750);
    heatpumpParameterMap.set('ID_SubNetMask_akt',751);
    heatpumpParameterMap.set('ID_Add_Broadcast_akt',752);
    heatpumpParameterMap.set('ID_Add_StdGateway_akt',753);
    heatpumpParameterMap.set('ID_DHCPServerAktiv_akt',754);
    heatpumpParameterMap.set('ID_WebserverPasswort_1_akt',755);
    heatpumpParameterMap.set('ID_WebserverPasswort_2_akt',756);
    heatpumpParameterMap.set('ID_WebserverPasswort_3_akt',757);
    heatpumpParameterMap.set('ID_WebserverPasswort_4_akt',758);
    heatpumpParameterMap.set('ID_WebserverPasswort_5_akt',759);
    heatpumpParameterMap.set('ID_WebserverPasswort_6_akt',760);
    heatpumpParameterMap.set('ID_WebServerWerteBekommen',761);
    heatpumpParameterMap.set('ID_Einst_ParBetr_akt',762);
    heatpumpParameterMap.set('ID_Einst_WpAnz_akt',763);
    heatpumpParameterMap.set('ID_Einst_PhrTime_akt',764);
    heatpumpParameterMap.set('ID_Einst_HysPar_akt',765);
    heatpumpParameterMap.set('ID_IP_PB_Slave_0',766);
    heatpumpParameterMap.set('ID_IP_PB_Slave_1',767);
    heatpumpParameterMap.set('ID_IP_PB_Slave_2',768);
    heatpumpParameterMap.set('ID_IP_PB_Slave_3',769);
    heatpumpParameterMap.set('ID_IP_PB_Slave_4',770);
    heatpumpParameterMap.set('ID_IP_PB_Slave_5',771);
    heatpumpParameterMap.set('ID_Einst_BwHup_akt_backup',772);
    heatpumpParameterMap.set('ID_Einst_SuMk3_akt',773);
    heatpumpParameterMap.set('ID_Einst_HzMK3E_akt',774);
    heatpumpParameterMap.set('ID_Einst_HzMK3ANH_akt',775);
    heatpumpParameterMap.set('ID_Einst_HzMK3ABS_akt',776);
    heatpumpParameterMap.set('ID_Einst_HzMK3Hgr_akt',777);
    heatpumpParameterMap.set('ID_Einst_HzFtMK3Vl_akt',778);
    heatpumpParameterMap.set('ID_Ba_Hz_MK3_akt',779);
    heatpumpParameterMap.set('ID_Einst_MK3Typ_akt',780);
    heatpumpParameterMap.set('ID_Einst_RTypMK3_akt',781);
    heatpumpParameterMap.set('ID_Einst_MK3LzFaktor_akt',782);
    heatpumpParameterMap.set('ID_Einst_MK3PerFaktor_akt',783);
    heatpumpParameterMap.set('ID_FerienModusAktivMk3',784);
    heatpumpParameterMap.set('ID_SU_FrkdMK3',785);
    heatpumpParameterMap.set('ID_FerienAbsenkungMK3',786);
    heatpumpParameterMap.set('ID_SU_FstdMK3',787);
    heatpumpParameterMap.set('ID_Einst_SuMk3_akt2',788);
    heatpumpParameterMap.set('ID_Einst_SuMk3Wo_zeit_0_0',789);
    heatpumpParameterMap.set('ID_Einst_SuMk3Wo_zeit_0_1',790);
    heatpumpParameterMap.set('ID_Einst_SuMk3Wo_zeit_1_0',791);
    heatpumpParameterMap.set('ID_Einst_SuMk3Wo_zeit_1_1',792);
    heatpumpParameterMap.set('ID_Einst_SuMk3Wo_zeit_2_0',793);
    heatpumpParameterMap.set('ID_Einst_SuMk3Wo_zeit_2_1',794);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_0_0',795);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_0_1',796);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_1_0',797);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_1_1',798);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_2_0',799);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_2_1',800);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_0_2',801);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_0_3',802);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_1_2',803);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_1_3',804);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_2_2',805);
    heatpumpParameterMap.set('ID_Einst_SuMk325_zeit_2_3',806);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_0',807);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_1',808);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_0',809);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_1',810);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_0',811);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_1',812);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_2',813);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_3',814);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_2',815);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_3',816);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_2',817);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_3',818);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_4',819);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_5',820);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_4',821);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_5',822);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_4',823);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_5',824);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_6',825);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_7',826);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_6',827);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_7',828);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_6',829);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_7',830);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_8',831);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_9',832);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_8',833);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_9',834);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_8',835);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_9',836);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_10',837);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_11',838);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_10',839);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_11',840);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_10',841);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_11',842);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_12',843);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_0_13',844);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_12',845);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_1_13',846);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_12',847);
    heatpumpParameterMap.set('ID_Einst_SuMk3Tg_zeit_2_13',848);
    heatpumpParameterMap.set('ID_Ba_Hz_MK3_saved',849);
    heatpumpParameterMap.set('ID_Einst_Kuhl_Zeit_Ein_akt',850);
    heatpumpParameterMap.set('ID_Einst_Kuhl_Zeit_Aus_akt',851);
    heatpumpParameterMap.set('ID_Waermemenge_ab',852);
    heatpumpParameterMap.set('ID_Waermemenge_WQ',853);
    heatpumpParameterMap.set('ID_Waermemenge_Hz',854);
    heatpumpParameterMap.set('ID_Waermemenge_WQ_ges',855);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_13',856);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_14',857);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_15',858);
    heatpumpParameterMap.set('ID_Zaehler_BetrZeitSW',859);
    heatpumpParameterMap.set('ID_Einst_Fernwartung_akt',860);
    heatpumpParameterMap.set('ID_AdresseIPServ_akt',861);
    heatpumpParameterMap.set('ID_Einst_TA_EG_akt',862);
    heatpumpParameterMap.set('ID_Einst_TVLmax_EG_akt',863);
    heatpumpParameterMap.set('ID_Einst_Popt_Nachlauf_akt',864);
    heatpumpParameterMap.set('ID_FernwartungVertrag_akt',865);
    heatpumpParameterMap.set('ID_FernwartungAktuZeit',866);
    heatpumpParameterMap.set('ID_Einst_Effizienzpumpe_Nominal_akt',867);
    heatpumpParameterMap.set('ID_Einst_Effizienzpumpe_Minimal_akt',868);
    heatpumpParameterMap.set('ID_Einst_Effizienzpumpe_akt',869);
    heatpumpParameterMap.set('ID_Einst_Waermemenge_akt',870);
    heatpumpParameterMap.set('ID_Einst_Wm_Versorgung_Korrektur_akt',871);
    heatpumpParameterMap.set('ID_Einst_Wm_Auswertung_Korrektur_akt',872);
    heatpumpParameterMap.set('ID_SoftwareUpdateJetztGemacht_akt',873);
    heatpumpParameterMap.set('ID_WP_SerienNummer_DATUM',874);
    heatpumpParameterMap.set('ID_WP_SerienNummer_HEX',875);
    heatpumpParameterMap.set('ID_WP_SerienNummer_INDEX',876);
    heatpumpParameterMap.set('ID_ProgWerteWebSrvBeobarten',877);
    heatpumpParameterMap.set('ID_Waermemenge_BW',878);
    heatpumpParameterMap.set('ID_Waermemenge_SW',879);
    heatpumpParameterMap.set('ID_Waermemenge_Datum',880);
    heatpumpParameterMap.set('ID_Einst_Solar_akt',881);
    heatpumpParameterMap.set('ID_BSTD_Solar',882);
    heatpumpParameterMap.set('ID_Einst_TDC_Koll_Max_akt',883);
    heatpumpParameterMap.set('ID_Einst_Akt_Kuehlung_akt',884);
    heatpumpParameterMap.set('ID_Einst_Vorlauf_VBO_akt',885);
    heatpumpParameterMap.set('ID_Einst_KRHyst_akt',886);
    heatpumpParameterMap.set('ID_Einst_Akt_Kuehl_Speicher_min_akt',887);
    heatpumpParameterMap.set('ID_Einst_Akt_Kuehl_Freig_WQE_akt',888);
    heatpumpParameterMap.set('ID_NDAB_WW_Anzahl',889);
    heatpumpParameterMap.set('ID_NDS_WW_KD_Quitt',890);
    heatpumpParameterMap.set('ID_Einst_AbtZykMin_akt',891);
    heatpumpParameterMap.set('ID_Einst_VD2_Zeit_Min_akt',892);
    heatpumpParameterMap.set('ID_Einst_Hysterese_HR_verkuerzt_akt',893);
    heatpumpParameterMap.set('ID_Einst_BA_Lueftung_akt',894);
    heatpumpParameterMap.set('ID_Einst_SuLuf_akt',895);
    heatpumpParameterMap.set('ID_Einst_SuLufWo_zeit_0_0_0',896);
    heatpumpParameterMap.set('ID_Einst_SuLufWo_zeit_0_1_0',897);
    heatpumpParameterMap.set('ID_Einst_SuLufWo_zeit_0_2_0',898);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_0_0_0',899);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_0_1_0',900);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_0_2_0',901);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_0_0_2',902);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_0_1_2',903);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_0_2_2',904);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_0_0',905);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_1_0',906);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_2_0',907);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_0_2',908);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_1_2',909);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_2_2',910);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_0_4',911);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_1_4',912);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_2_4',913);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_0_6',914);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_1_6',915);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_2_6',916);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_0_8',917);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_1_8',918);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_2_8',919);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_0_10',920);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_1_10',921);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_2_10',922);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_0_12',923);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_1_12',924);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_0_2_12',925);
    heatpumpParameterMap.set('ID_Einst_SuLufWo_zeit_1_0_0',926);
    heatpumpParameterMap.set('ID_Einst_SuLufWo_zeit_1_1_0',927);
    heatpumpParameterMap.set('ID_Einst_SuLufWo_zeit_1_2_0',928);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_1_0_0',929);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_1_1_0',930);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_1_2_0',931);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_1_0_2',932);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_1_1_2',933);
    heatpumpParameterMap.set('ID_Einst_SuLuf25_zeit_1_2_2',934);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_0_0',935);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_1_0',936);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_2_0',937);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_0_2',938);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_1_2',939);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_2_2',940);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_0_4',941);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_1_4',942);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_2_4',943);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_0_6',944);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_1_6',945);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_2_6',946);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_0_8',947);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_1_8',948);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_2_8',949);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_0_10',950);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_1_10',951);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_2_10',952);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_0_12',953);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_1_12',954);
    heatpumpParameterMap.set('ID_Einst_SuLufTg_zeit_1_2_12',955);
    heatpumpParameterMap.set('ID_FerienModusAktivLueftung',956);
    heatpumpParameterMap.set('ID_Einst_BA_Lueftung_saved',957);
    heatpumpParameterMap.set('ID_SU_FrkdLueftung',958);
    heatpumpParameterMap.set('ID_SU_FstdLueftung',959);
    heatpumpParameterMap.set('ID_Einst_Luf_Feuchteschutz_akt',960);
    heatpumpParameterMap.set('ID_Einst_Luf_Reduziert_akt',961);
    heatpumpParameterMap.set('ID_Einst_Luf_Nennlueftung_akt',962);
    heatpumpParameterMap.set('ID_Einst_Luf_Intensivlueftung_akt',963);
    heatpumpParameterMap.set('ID_Timer_Fil_4Makt',964);
    heatpumpParameterMap.set('ID_Timer_Fil_WoAkt',965);
    heatpumpParameterMap.set('ID_Sollwert_KuCft3_akt',966);
    heatpumpParameterMap.set('ID_Sollwert_AtDif3_akt',967);
    heatpumpParameterMap.set('ID_Bitmaske_0',968);
    heatpumpParameterMap.set('ID_Einst_Lueftungsstufen',969);
    heatpumpParameterMap.set('ID_SysEin_Meldung_TDI',970);
    heatpumpParameterMap.set('ID_SysEin_Typ_WZW',971);
    heatpumpParameterMap.set('ID_Einst_BACnet_aktiviert',972);
    heatpumpParameterMap.set('ID_Einst_BW_max',973);
    heatpumpParameterMap.set('ID_Einst_Sollwert_TRL_Kuehlen',974);
    heatpumpParameterMap.set('ID_Einst_Medium_Waermequelle',975);
    heatpumpParameterMap.set('ID_Einst_Photovoltaik_akt',976);
    heatpumpParameterMap.set('ID_Einst_Multispeicher_akt',977);
    heatpumpParameterMap.set('ID_Einst_PKuehlTime_akt',978);
    heatpumpParameterMap.set('ID_Einst_Minimale_Ruecklaufsolltemperatur',979);
    heatpumpParameterMap.set('ID_RBE_Einflussfaktor_RT_akt',980);
    heatpumpParameterMap.set('ID_RBE_Freigabe_Kuehlung_akt',981);
    heatpumpParameterMap.set('ID_RBE_Waermeverteilsystem_akt',982);
    heatpumpParameterMap.set('ID_RBE_Zeit_Heizstab_aktiv',983);
    heatpumpParameterMap.set('ID_SEC_ND_Alarmgrenze',984);
    heatpumpParameterMap.set('ID_SEC_HD_Alarmgrenze',985);
    heatpumpParameterMap.set('ID_SEC_Abtauendtemperatur',986);
    heatpumpParameterMap.set('ID_Einst_Min_RPM_BW',987);
    heatpumpParameterMap.set('ID_Einst_Luf_Feuchteschutz_Faktor_akt',988);
    heatpumpParameterMap.set('ID_Einst_Luf_Reduziert_Faktor_akt',989);
    heatpumpParameterMap.set('ID_Einst_Luf_Nennlueftung_Faktor_akt',990);
    heatpumpParameterMap.set('ID_Einst_Luf_Intensivlueftung_Faktor_akt',991);
    heatpumpParameterMap.set('ID_Einst_Freigabe_Zeit_ZWE',992);
    heatpumpParameterMap.set('ID_Einst_min_VL_Kuehl',993);
    heatpumpParameterMap.set('ID_Einst_Warmwasser_Nachheizung',994);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_0_0',995);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_1_0',996);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_2_0',997);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_3_0',998);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_4_0',999);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_0_1',1000);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_1_1',1001);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_2_1',1002);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_3_1',1003);
    heatpumpParameterMap.set('ID_Switchoff_file_LWD2_4_1',1004);
    heatpumpParameterMap.set('ID_Switchoff_index_LWD2',1005);
    heatpumpParameterMap.set('ID_Einst_Effizienzpumpe_Nominal_2',1006);
    heatpumpParameterMap.set('ID_Einst_Effizienzpumpe_Minimal_2',1007);
    heatpumpParameterMap.set('ID_Einst_Wm_Versorgung_Korrektur_2',1008);
    heatpumpParameterMap.set('ID_Einst_Wm_Auswertung_Korrektur_2',1009);
    heatpumpParameterMap.set('ID_Einst_isTwin',1010);
    heatpumpParameterMap.set('ID_Einst_TAmin_2',1011);
    heatpumpParameterMap.set('ID_Einst_TVLmax_2',1012);
    heatpumpParameterMap.set('ID_Einst_TA_EG_2',1013);
    heatpumpParameterMap.set('ID_Einst_TVLmax_EG_2',1014);
    heatpumpParameterMap.set('ID_Waermemenge_Hz_2',1015);
    heatpumpParameterMap.set('ID_Waermemenge_BW_2',1016);
    heatpumpParameterMap.set('ID_Waermemenge_SW_2',1017);
    heatpumpParameterMap.set('ID_Waermemenge_ab_2',1018);
    heatpumpParameterMap.set('ID_Einst_Entl_Typ_15_2',1019);
    heatpumpParameterMap.set('ID_Einst_WW_Nachheizung_max',1020);
    heatpumpParameterMap.set('ID_Einst_Kuhl_Zeit_Ein_RT',1021);
    heatpumpParameterMap.set('ID_Einst_ZWE1_Pos',1022);
    heatpumpParameterMap.set('ID_Einst_ZWE2_Pos',1023);
    heatpumpParameterMap.set('ID_Einst_ZWE3_Pos',1024);
    heatpumpParameterMap.set('ID_Einst_Leistung_ZWE',1025);
    heatpumpParameterMap.set('ID_WP_SN2_DATUM',1026);
    heatpumpParameterMap.set('ID_WP_SN2_HEX',1027);
    heatpumpParameterMap.set('ID_WP_SN2_INDEX',1028);
    heatpumpParameterMap.set('ID_CWP_saved2',1029);
    heatpumpParameterMap.set('ID_Einst_SmartGrid',1030);
    heatpumpParameterMap.set('ID_Einst_P155_HDS',1031);
    heatpumpParameterMap.set('ID_Einst_P155_PumpHeat_Max',1032);
    heatpumpParameterMap.set('ID_Einst_P155_PumpHeatCtrl',1033);
    heatpumpParameterMap.set('ID_Einst_P155_PumpDHWCtrl',1034);
    heatpumpParameterMap.set('ID_Einst_P155_PumpDHW_RPM',1035);
    heatpumpParameterMap.set('ID_Einst_P155_PumpPoolCtrl',1036);
    heatpumpParameterMap.set('ID_Einst_P155_PumpPool_RPM',1037);
    heatpumpParameterMap.set('ID_Einst_P155_PumpCool_RPM',1038);
    heatpumpParameterMap.set('ID_Einst_P155_PumpVBOCtrl',1039);
    heatpumpParameterMap.set('ID_Einst_P155_PumpVBO_RPM_C',1040);
    heatpumpParameterMap.set('ID_Einst_P155_PumpDHW_Max',1041);
    heatpumpParameterMap.set('ID_Einst_P155_PumpPool_Max',1042);
    heatpumpParameterMap.set('ID_Einst_P155_Sperrband_1',1043);
    heatpumpParameterMap.set('ID_Einst_P155_Leistungsfreigabe',1044);
    heatpumpParameterMap.set('ID_Einst_P155_DHW_Freq',1045);
    heatpumpParameterMap.set('ID_Einst_SWHUP',1046);
    heatpumpParameterMap.set('ID_Einst_P155_SWB_Freq',1047);
    heatpumpParameterMap.set('ID_Einst_MK1_Regelung',1048);
    heatpumpParameterMap.set('ID_Einst_MK2_Regelung',1049);
    heatpumpParameterMap.set('ID_Einst_MK3_Regelung',1050);
    heatpumpParameterMap.set('ID_Einst_PV_WW_Sperrzeit',1051);
    heatpumpParameterMap.set('ID_Einst_Warmwasser_extra',1052);
    heatpumpParameterMap.set('ID_Einst_Vorl_akt_Kuehl',1053);
    heatpumpParameterMap.set('ID_WP_SN3_DATUM',1054);
    heatpumpParameterMap.set('ID_WP_SN3_HEX',1055);
    heatpumpParameterMap.set('ID_WP_SN3_INDEX',1056);
    heatpumpParameterMap.set('ID_Einst_Vorlauf_ZUP',1057);
    heatpumpParameterMap.set('ID_Einst_Abtauen_im_Warmwasser',1058);
    heatpumpParameterMap.set('ID_Waermemenge_ZWE',1059);
    heatpumpParameterMap.set('ID_Waermemenge_Reset',1060);
    heatpumpParameterMap.set('ID_Waermemenge_Reset_2',1061);
    heatpumpParameterMap.set('AnzahlParameterInit',1062);
    heatpumpParameterMap.set('1063',1063);
    heatpumpParameterMap.set('1064',1064);
    heatpumpParameterMap.set('1065',1065);
    heatpumpParameterMap.set('1066',1066);
    heatpumpParameterMap.set('1067',1067);
    heatpumpParameterMap.set('1068',1068);
    heatpumpParameterMap.set('1069',1069);
    heatpumpParameterMap.set('1070',1070);
    heatpumpParameterMap.set('1071',1071);
    heatpumpParameterMap.set('1072',1072);
    heatpumpParameterMap.set('1073',1073);
    heatpumpParameterMap.set('1074',1074);
    heatpumpParameterMap.set('1075',1075);
    heatpumpParameterMap.set('1076',1076);
    heatpumpParameterMap.set('1077',1077);
    heatpumpParameterMap.set('1078',1078);
    heatpumpParameterMap.set('1079',1079);
    heatpumpParameterMap.set('1080',1080);
    heatpumpParameterMap.set('1081',1081);
    heatpumpParameterMap.set('1082',1082);
	heatpumpParameterMap.set('1083',1083);
    heatpumpParameterMap.set('1084',1084);
    heatpumpParameterMap.set('1085',1085);
    

/**
 * Return the complete List of Heatpump Parameters
 * Heatpump Parameters can be changed, depending on their attribute 'writable'
 * 
 * @param {Int32Array} values
 */
function getRawHeatPumpParameters(values) {
    return {
        'ID_Transfert_LuxNet': {
			'rawvalue': values[heatpumpParameterMap.get('ID_Transfert_LuxNet')],
			'value': values[heatpumpParameterMap.get('ID_Transfert_LuxNet')],
            'name': '??',
            'calculationrule': '??',
            'unit': '??',
			'writeable': false
		},
        'ID_Einst_WK_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_WK_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_WK_akt')] /10,
            'name': 'Heizungstemperatur',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_BWS_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BWS_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BWS_akt')] /10,
            'name': 'Warmwassertemperatur Deckung Wärmepumpe',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Ba_Hz_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_akt')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_akt')],
            'name': 'Heizungsmodus',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;3 = Ferien;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Bw_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Bw_akt')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Bw_akt')],
            'name': 'Warmwassermodus',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;3 = Ferien;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Al_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Al_akt')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Al_akt')],
            'name': '',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;3 = Ferien;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdHz': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdHz')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdHz')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': 'Heizung - Ferien bis',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdBw': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdBw')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdBw')] * 1000).toUTCString(),
            'name': 'Warmwasser - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdAl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdAl')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdAl')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HReg_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HReg_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HReg_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzHwMAt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzHwMAt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzHwMAt_akt')] /10,
            'name': 'Bezugswert Außentemperatur',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzHwHKE_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzHwHKE_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzHwHKE_akt')] /10,
            'name': 'Heizkurvenendpunkt',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzHKRANH_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzHKRANH_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzHKRANH_akt')] / 10,
            'name': 'Heizkurve Paralellverschiebung',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzHKRABS_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzHKRABS_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzHKRABS_akt')] /10,
            'name': 'Nachtabsenkung',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Einst_HzMK1E_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK1E_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK1E_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK1ANH_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK1ANH_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK1ANH_akt')] /10 ,
            'name': 'Paralellverschiebung: Bezugswert Außentemperatur',
            'calculationrule': 'value / 10',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK1ABS_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK1ABS_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK1ABS_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtRl_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzFtRl_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzFtRl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtMK1Vl_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzFtMK1Vl_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzFtMK1Vl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SUBW_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SUBW_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SUBW_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_MO': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_MO')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_MO')],
            'name': 'Thermische Desinfektion Montag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_DI': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_DI')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_DI')],
            'name': 'Thermische Desinfektion Dienstag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_MI': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_MI')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_MI')],
            'name': 'Thermische Desinfektion Mittwoch',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_DO': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_DO')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_DO')],
            'name': 'Thermische Desinfektion Donnerstag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_FR': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_FR')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_FR')],
            'name': 'Thermische Desinfektion Freitag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_SA': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_SA')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_SA')],
            'name': 'Thermische Desinfektion Samstag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_SO': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_SO')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_SO')],
            'name': 'Thermische Desinfektion Sonntag',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwTDI_akt_AL': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_AL')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwTDI_akt_AL')],
            'name': 'Thermische Desinfektion Dauerbetrieb',
            'calculationrule': '1 = an; 0 = aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlKonf_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_AnlKonf_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_AnlKonf_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Sprache_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Sprache_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Sprache_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_Zahler': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_Zahler')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_Zahler')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_index': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_index')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_index')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_EvuTyp_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_EvuTyp_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_EvuTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RFVEinb_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_RFVEinb_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_RFVEinb_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AbtZykMax_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_AbtZykMax_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_AbtZykMax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HREinb_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HREinb_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HREinb_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE1Art_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE1Art_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE1Art_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE1Fkt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE1Fkt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE1Fkt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE2Art_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE2Art_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE2Art_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE2Fkt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE2Fkt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE2Fkt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWBer_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BWBer_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BWBer_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_En_Inst': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_En_Inst')],
            'value': values[heatpumpParameterMap.get('ID_Einst_En_Inst')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1Typ_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK1Typ_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK1Typ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ABTLuft_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ABTLuft_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ABTLuft_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TLAbt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TLAbt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TLAbt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_LAbtTime_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_LAbtTime_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_LAbtTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ASDTyp_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ASDTyp_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ASDTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_LGST_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_LGST_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_LGST_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwWpTime_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwWpTime_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwWpTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Popt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Popt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Popt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Kurzprog_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Kurzprog_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Kurzprog_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_Kurzprog_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Timer_Kurzprog_akt')],
            'value': values[heatpumpParameterMap.get('ID_Timer_Kurzprog_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ManAbt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ManAbt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ManAbt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Ahz_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Ahz_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Ahz_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Ahz_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Ahz_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVL_Std_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVL_Std_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWS_Hyst_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BWS_Hyst_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BWS_Hyst_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Temp_TBW_BwHD_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Temp_TBW_BwHD_saved')],
            'value': values[heatpumpParameterMap.get('ID_Temp_TBW_BwHD_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ABT1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ABT1_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ABT1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_LABTpaus_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_LABTpaus_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_LABTpaus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_AHZ_state_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_AHZ_state_akt')],
            'value': values[heatpumpParameterMap.get('ID_AHZ_state_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_TRL_HZ_AHZ': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_TRL_HZ_AHZ')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_TRL_HZ_AHZ')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_AHP_valid_records': {
            'rawvalue': values[heatpumpParameterMap.get('ID_AHP_valid_records')],
            'value': values[heatpumpParameterMap.get('ID_AHP_valid_records')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_AHZ_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Timer_AHZ_akt')],
            'value': values[heatpumpParameterMap.get('ID_Timer_AHZ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWTINP_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BWTINP_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BWTINP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZUPTYP_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZUPTYP_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZUPTYP_akt')],
            'name': 'Zusatzumwälzpumpe ??',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_TLG_max': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_TLG_max')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_TLG_max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWZIP_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BWZIP_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BWZIP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ERRmZWE_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ERRmZWE_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ERRmZWE_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TRBegr_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TRBegr_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TRBegr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HRHyst_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HRHyst_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HRHyst_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TRErhmax_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TRErhmax_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TRErhmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWEFreig_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWEFreig_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWEFreig_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAmax_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TAmax_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TAmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAmin_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TAmin_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TAmin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TWQmin_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TWQmin_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TWQmin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_THGmax_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_THGmax_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_THGmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_FRGT2VD_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_FRGT2VD_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_FRGT2VD_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TV2VDBW_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TV2VDBW_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TV2VDBW_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAbtEnd_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TAbtEnd_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TAbtEnd_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_NrKlingel_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_NrKlingel_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_NrKlingel_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BWStyp_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BWStyp_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BWStyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ABT2_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ABT2_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ABT2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_UeVd_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_UeVd_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_UeVd_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTyp_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_RTyp_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_RTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AhpM_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_AhpM_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_AhpM_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Soll_BWS_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Soll_BWS_akt')],
            'value': values[heatpumpParameterMap.get('ID_Soll_BWS_akt')] / 10,
            'name': 'Zieltemperatur Warmwasser',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_Timer_Password': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Timer_Password')],
            'value': values[heatpumpParameterMap.get('ID_Timer_Password')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Zugangscode': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Zugangscode')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Zugangscode')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BA_Kuehl_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BA_Kuehl_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BA_Kuehl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_Kuehl1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_Kuehl1_akt')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_Kuehl1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_KuehlFreig_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_KuehlFreig_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_KuehlFreig_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAbsMin_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TAbsMin_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TAbsMin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_TWQmin_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_TWQmin_saved')],
            'value': values[heatpumpParameterMap.get('ID_TWQmin_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_CWP_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_CWP_saved')],
            'value': values[heatpumpParameterMap.get('ID_CWP_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Anode_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Anode_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Anode_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_pexoff_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Timer_pexoff_akt')],
            'value': values[heatpumpParameterMap.get('ID_Timer_pexoff_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlPrio_Hzakt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_AnlPrio_Hzakt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_AnlPrio_Hzakt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlPrio_Bwakt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_AnlPrio_Bwakt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_AnlPrio_Bwakt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AnlPrio_Swakt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_AnlPrio_Swakt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_AnlPrio_Swakt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Sw_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Sw_akt')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Sw_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTypMK1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_RTypMK1_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_RTypMK1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTypMK2_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_RTypMK2_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_RTypMK2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Ein_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TDC_Ein_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TDC_Ein_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Aus_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TDC_Aus_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TDC_Aus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Max_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TDC_Max_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TDC_Max_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HysHzExEn_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HysHzExEn_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HysHzExEn_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HysBwExEn_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HysBwExEn_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HysBwExEn_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE3Art_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE3Art_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE3Art_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE3Fkt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE3Fkt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE3Fkt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzSup_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzSup_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzSup_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2Typ_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK2Typ_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK2Typ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_KuTyp_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_KuTyp_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_KuTyp_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_KuCft1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_KuCft1_akt')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_KuCft1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_KuCft2_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_KuCft2_akt')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_KuCft2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_AtDif1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_AtDif1_akt')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_AtDif1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_AtDif2_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_AtDif2_akt')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_AtDif2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdSwb': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdSwb')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdSwb')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SwbBer_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SwbBer_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SwbBer_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TV2VDSWB_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TV2VDSWB_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TV2VDSWB_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MinSwan_Time_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MinSwan_Time_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MinSwan_Time_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2E_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK2E_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK2E_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2ANH_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK2ANH_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK2ANH_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2ABS_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK2ABS_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK2ABS_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK2Hgr_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK2Hgr_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK2Hgr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtMK2Vl_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzFtMK2Vl_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzFtMK2Vl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Temp_THG_BwHD_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Temp_THG_BwHD_saved')],
            'value': values[heatpumpParameterMap.get('ID_Temp_THG_BwHD_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Temp_TA_BwHD_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Temp_TA_BwHD_saved')],
            'value': values[heatpumpParameterMap.get('ID_Temp_TA_BwHD_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwHup_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwHup_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwHup_akt')],
            'name': 'Warmwasserumwälzpumpe aktiv',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVLmax_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVLmax_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1LzFaktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK1LzFaktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK1LzFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2LzFaktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK2LzFaktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK2LzFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1PerFaktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK1PerFaktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK1PerFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2PerFaktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK2PerFaktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK2PerFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Entl_Zyklus_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Entl_Zyklus_akt')],
            'value': values[heatpumpParameterMap.get('ID_Entl_Zyklus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_time_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_time_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_time_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Entl_Pause': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Entl_Pause')],
            'value': values[heatpumpParameterMap.get('ID_Entl_Pause')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Entl_timer': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Entl_timer')],
            'value': values[heatpumpParameterMap.get('ID_Entl_timer')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ahz_HLeist_confirmed': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ahz_HLeist_confirmed')],
            'value': values[heatpumpParameterMap.get('ID_Ahz_HLeist_confirmed')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FirstInit_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FirstInit_akt')],
            'value': values[heatpumpParameterMap.get('ID_FirstInit_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll_akt2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll_akt2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll_akt2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllWo_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllWo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAll25_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAll25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuAllTg_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuAllTg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrW0_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrW0_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkr25_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkr25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuHkrTG_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuHkrTG_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1W0_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1W0_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk125_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk125_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk1TG_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk1TG_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2_akt2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2_akt2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2_akt2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Wo_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Wo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk225_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk225_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk2Tg_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk2Tg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SUBW_akt2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SUBW_akt2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SUBW_akt2')],
            'name': 'Aktive Warmwasserzeiten',
            'calculationrule': '0 = Woche(Mo-So); 1 = 5+2 (Mo-Fr,Sa-So); 2 = Tage (Mo,Di,...)',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_0_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_0_0')]),
            'name': 'Schaltuhr Warmwasser Woche (1) von',
            'calculationrule': '',
            'unit': 'seconds',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_0_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_0_1')]),
            'name': 'Schaltuhr Warmwasser Woche (1) bis',
            'calculationrule': '',
            'unit': 'seconds',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_1_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_1_0')]),
            'name': 'Schaltuhr Warmwasser Woche (2) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_1_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_1_1')]),
            'name': 'Schaltuhr Warmwasser Woche (2) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_2_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_2_0')]),
            'name': 'Schaltuhr Warmwasser Woche (3) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_2_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_2_1')]),
            'name': 'Schaltuhr Warmwasser Woche (3) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_3_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_3_0')]),
            'name': 'Schaltuhr Warmwasser Woche (4) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_3_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_3_1')]),
            'name': 'Schaltuhr Warmwasser Woche (4) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_4_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_4_0')]),
            'name': 'Schaltuhr Warmwasser Woche (5) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwWO_zeit_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_4_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwWO_zeit_4_1')]),
            'name': 'Schaltuhr Warmwasser Woche (5) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (1) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (1) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (2) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (2) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (3) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (3) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (4) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (4) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_0')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (5) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_1')]),
            'name': 'Schaltuhr Warmwasser Mo-Fr (5) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (1) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_0_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (1) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (2) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_1_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (2) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (3) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_2_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (3) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (4) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_3_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_3_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (4) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_2')]),
            'name': 'Schaltuhr Warmwasser Sa-So (5) von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBw25_zeit_4_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBw25_zeit_4_3')]),
            'name': 'Schaltuhr Warmwasser Sa-So (5) bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_0')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_0')]),
            'name': 'Schaltuhr Warmwasser So () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_1')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_1')]),
            'name': 'Schaltuhr Warmwasser So () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_2')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_2')]),
            'name': 'Schaltuhr Warmwasser Mo () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_3')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_3')]),
            'name': 'Schaltuhr Warmwasser Mo () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_4')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_5')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_4')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_5')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_4')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_5')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_4')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_5')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_4')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_4')]),
            'name': 'Schaltuhr Warmwasser Di () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_5')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_5')]),
            'name': 'Schaltuhr Warmwasser Di () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_6')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_7')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_6')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_7')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_6')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_7')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_6')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_7')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_6')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_6')]),
            'name': 'Schaltuhr Warmwasser Mi () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_7')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_7')]),
            'name': 'Schaltuhr Warmwasser Mi () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_8')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_9')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_8')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_9')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_8')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_9')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_8')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_9')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_8')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_8')]),
            'name': 'Schaltuhr Warmwasser Do () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_9')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_9')]),
            'name': 'Schaltuhr Warmwasser Do () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_10')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_11')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_10')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_11')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_10')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_11')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_10')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_11')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_10')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_10')]),
            'name': 'Schaltuhr Warmwasser Fr () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_11')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_11')]),
            'name': 'Schaltuhr Warmwasser Fr () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_12')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_13')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_0_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_12')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_13')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_1_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_12')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_13')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_2_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_12')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_3_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_13')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_3_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_12')],
            'value': utils.createFromTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_12')]),
            'name': 'Schaltuhr Warmwasser Sa () von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuBwTG_zeit_4_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_13')],
            'value': utils.createToTime(values[heatpumpParameterMap.get('ID_Einst_SuBwTG_zeit_4_13')]),
            'name': 'Schaltuhr Warmwasser Sa () bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_3_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_3_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_4_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPWo_zeit_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_4_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPWo_zeit_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_3_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_3_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIP25_zeit_4_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIP25_zeit_4_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_3_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_3_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuZIPTg_zeit_4_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuZIPTg_zeit_4_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbWo_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbWo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwb25_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwb25_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuSwbTg_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuSwbTg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitWP': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitWP')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitWP')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitVD1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitVD1')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitVD1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitVD2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitVD2')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitVD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitZWE1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitZWE1')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitZWE1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitZWE2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitZWE2')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitZWE2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitZWE3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitZWE3')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitZWE3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitImpVD1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitImpVD1')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitImpVD1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitImpVD2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitImpVD2')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitImpVD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitEZMVD1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitEZMVD1')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitEZMVD1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitEZMVD2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitEZMVD2')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitEZMVD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorl_max_MK1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Vorl_max_MK1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Vorl_max_MK1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorl_max_MK2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Vorl_max_MK2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Vorl_max_MK2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdMK1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdMK1')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdMK1')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 1 - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdMK2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdMK2')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdMK2')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 2 - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_MK1_akt')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_MK1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK2_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_MK2_akt')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_MK2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Zirk_Ein_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Zirk_Ein_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Zirk_Ein_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Zirk_Aus_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Zirk_Aus_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Zirk_Aus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Heizgrenze': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Heizgrenze')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Heizgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Heizgrenze_Temp': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Heizgrenze_Temp')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Heizgrenze_Temp')] / 10,
            'name': 'Heizgrenze',
            'calculationrule': 'value / 10',
            'unit': '°C',
			'writeable': false
		},
        'ID_VariablenIBNgespeichert': {
            'rawvalue': values[heatpumpParameterMap.get('ID_VariablenIBNgespeichert')],
            'value': values[heatpumpParameterMap.get('ID_VariablenIBNgespeichert')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SchonIBNAssistant': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SchonIBNAssistant')],
            'value': values[heatpumpParameterMap.get('ID_SchonIBNAssistant')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_0')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_1')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_2')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_3')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_4')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_5')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_6')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_7')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_8')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_9')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_10')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Heizgrenze_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Heizgrenze_11')],
            'value': values[heatpumpParameterMap.get('ID_Heizgrenze_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SchemenIBNgewahlt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SchemenIBNgewahlt')],
            'value': values[heatpumpParameterMap.get('ID_SchemenIBNgewahlt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_3_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_4_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_3_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_4_1')],
            'value': new Date(values[heatpumpParameterMap.get('ID_Switchoff_file_4_1')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_DauerDatenLoggerAktiv': {
            'rawvalue': values[heatpumpParameterMap.get('ID_DauerDatenLoggerAktiv')],
            'value': values[heatpumpParameterMap.get('ID_DauerDatenLoggerAktiv')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Laufvar_Heizgrenze': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Laufvar_Heizgrenze')],
            'value': values[heatpumpParameterMap.get('ID_Laufvar_Heizgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitHz': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitHz')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitHz')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitBW': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitBW')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitBW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitKue': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitKue')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitKue')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdHz': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FstdHz')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FstdHz')] * 1000).toUTCString(),
            'name': 'Heizung - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdBw': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FstdBw')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FstdBw')] * 1000).toUTCString(),
            'name': 'Warmwasser - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdSwb': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FstdSwb')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FstdSwb')] * 1000).toUTCString(),
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdMK1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FstdMK1')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FstdMK1')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 1 - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdMK2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FstdMK2')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FstdMK2')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 2 - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienAbsenkungHz': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienAbsenkungHz')],
            'value': values[heatpumpParameterMap.get('ID_FerienAbsenkungHz')] /10,
            'name': 'Heizung Ferienabsenkung',
            'calculationrule': '',
            'unit': '°C',
			'writeable': false
		},
        'ID_FerienAbsenkungMK1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienAbsenkungMK1')],
            'value': values[heatpumpParameterMap.get('ID_FerienAbsenkungMK1')]/10,
            'name': 'Heizung Mischkreis 1 Ferienabsenkung',
            'calculationrule': '',
            'unit': '°C',
			'writeable': false
		},
        'ID_FerienAbsenkungMK2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienAbsenkungMK2')],
            'value': values[heatpumpParameterMap.get('ID_FerienAbsenkungMK2')]/10,
            'name': 'Heizung Mischkreis 2 Ferienabsenkung',
            'calculationrule': '',
            'unit': '°C',
			'writeable': false
		},
        'ID_FerienModusAktivHz': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienModusAktivHz')],
            'value': values[heatpumpParameterMap.get('ID_FerienModusAktivHz')],
            'name': 'Ferienmodus Heizung',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivBw': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienModusAktivBw')],
            'value': values[heatpumpParameterMap.get('ID_FerienModusAktivBw')],
            'name': 'Ferienmodus Brauchwasser',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivSwb': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienModusAktivSwb')],
            'value': values[heatpumpParameterMap.get('ID_FerienModusAktivSwb')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivMk1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienModusAktivMk1')],
            'value': values[heatpumpParameterMap.get('ID_FerienModusAktivMk1')],
            'name': 'Ferienmodus Heizung Mischkreis 1',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivMk2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienModusAktivMk2')],
            'value': values[heatpumpParameterMap.get('ID_FerienModusAktivMk2')],
            'name': 'Ferienmodus Heizung Mischkreis 2',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_DisplayContrast_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_DisplayContrast_akt')],
            'value': values[heatpumpParameterMap.get('ID_DisplayContrast_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_saved')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_saved')],
            'name': 'Heizungsmodus nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Bw_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Bw_saved')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Bw_saved')],
            'name': 'Brauchwassermodus nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Sw_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Sw_saved')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Sw_saved')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK1_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_MK1_saved')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_MK1_saved')],
            'name': 'Heizungsmodus Mischkreis 1 nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK2_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_MK2_saved')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_MK2_saved')],
            'name': 'Heizungsmodus Mischkreis 2 nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_AdresseIP_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_AdresseIP_akt')],
            'value': values[heatpumpParameterMap.get('ID_AdresseIP_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SubNetMask_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SubNetMask_akt')],
            'value': values[heatpumpParameterMap.get('ID_SubNetMask_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Add_Broadcast_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Add_Broadcast_akt')],
            'value': values[heatpumpParameterMap.get('ID_Add_Broadcast_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Add_StdGateway_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Add_StdGateway_akt')],
            'value': values[heatpumpParameterMap.get('ID_Add_StdGateway_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_DHCPServerAktiv_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_DHCPServerAktiv_akt')],
            'value': values[heatpumpParameterMap.get('ID_DHCPServerAktiv_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_1_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WebserverPasswort_1_akt')],
            'value': values[heatpumpParameterMap.get('ID_WebserverPasswort_1_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_2_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WebserverPasswort_2_akt')],
            'value': values[heatpumpParameterMap.get('ID_WebserverPasswort_2_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_3_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WebserverPasswort_3_akt')],
            'value': values[heatpumpParameterMap.get('ID_WebserverPasswort_3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_4_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WebserverPasswort_4_akt')],
            'value': values[heatpumpParameterMap.get('ID_WebserverPasswort_4_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_5_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WebserverPasswort_5_akt')],
            'value': values[heatpumpParameterMap.get('ID_WebserverPasswort_5_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebserverPasswort_6_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WebserverPasswort_6_akt')],
            'value': values[heatpumpParameterMap.get('ID_WebserverPasswort_6_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WebServerWerteBekommen': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WebServerWerteBekommen')],
            'value': values[heatpumpParameterMap.get('ID_WebServerWerteBekommen')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ParBetr_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ParBetr_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ParBetr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_WpAnz_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_WpAnz_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_WpAnz_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_PhrTime_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_PhrTime_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_PhrTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HysPar_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HysPar_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HysPar_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_IP_PB_Slave_0')],
            'value': values[heatpumpParameterMap.get('ID_IP_PB_Slave_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_IP_PB_Slave_1')],
            'value': values[heatpumpParameterMap.get('ID_IP_PB_Slave_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_IP_PB_Slave_2')],
            'value': values[heatpumpParameterMap.get('ID_IP_PB_Slave_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_IP_PB_Slave_3')],
            'value': values[heatpumpParameterMap.get('ID_IP_PB_Slave_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_IP_PB_Slave_4')],
            'value': values[heatpumpParameterMap.get('ID_IP_PB_Slave_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_IP_PB_Slave_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_IP_PB_Slave_5')],
            'value': values[heatpumpParameterMap.get('ID_IP_PB_Slave_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BwHup_akt_backup': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BwHup_akt_backup')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BwHup_akt_backup')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3E_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK3E_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK3E_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3ANH_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK3ANH_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK3ANH_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3ABS_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK3ABS_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK3ABS_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzMK3Hgr_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzMK3Hgr_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzMK3Hgr_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_HzFtMK3Vl_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_HzFtMK3Vl_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_HzFtMK3Vl_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK3_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_MK3_akt')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_MK3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3Typ_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK3Typ_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK3Typ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_RTypMK3_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_RTypMK3_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_RTypMK3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3LzFaktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK3LzFaktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK3LzFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3PerFaktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK3PerFaktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK3PerFaktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivMk3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienModusAktivMk3')],
            'value': values[heatpumpParameterMap.get('ID_FerienModusAktivMk3')],
            'name': 'Ferienmodus Mischkreis 3',
            'calculationrule': '0 = deaktiviert, 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdMK3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdMK3')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdMK3')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 3 - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FerienAbsenkungMK3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienAbsenkungMK3')],
            'value': values[heatpumpParameterMap.get('ID_FerienAbsenkungMK3')] / 10,
            'name': 'Heizung Mischkreis 3 Ferienabsenkung',
            'calculationrule': 'value / 10',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdMK3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FstdMK3')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FstdMK3')] * 1000).toUTCString(),
            'name': 'Heizung Mischkreis 3 - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3_akt2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3_akt2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3_akt2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Wo_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Wo_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk325_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk325_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_3': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_3')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_3')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_4')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_4')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_5': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_5')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_5')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_6')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_6')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_7': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_7')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_7')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_8')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_8')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_9': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_9')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_9')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_10')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_10')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_11': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_11')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_11')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_0_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_0_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_1_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_1_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_12')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_12')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuMk3Tg_zeit_2_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuMk3Tg_zeit_2_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Ba_Hz_MK3_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Ba_Hz_MK3_saved')],
            'value': values[heatpumpParameterMap.get('ID_Ba_Hz_MK3_saved')],
            'name': 'Heizungsmodus Mischkreis 3 nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Zusatzheizung;2 = Party;4 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Kuhl_Zeit_Ein_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Kuhl_Zeit_Ein_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Kuhl_Zeit_Ein_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Kuhl_Zeit_Aus_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Kuhl_Zeit_Aus_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Kuhl_Zeit_Aus_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_ab': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_ab')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_ab')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_WQ': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_WQ')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_WQ')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Hz': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_Hz')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_Hz')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_WQ_ges': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_WQ_ges')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_WQ_ges')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_13': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_13')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_13')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_14': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_14')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_14')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_15': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_15')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_15')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Zaehler_BetrZeitSW': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitSW')],
            'value': values[heatpumpParameterMap.get('ID_Zaehler_BetrZeitSW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Fernwartung_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Fernwartung_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Fernwartung_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_AdresseIPServ_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_AdresseIPServ_akt')],
            'value': values[heatpumpParameterMap.get('ID_AdresseIPServ_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TA_EG_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TA_EG_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TA_EG_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_EG_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVLmax_EG_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVLmax_EG_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Popt_Nachlauf_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Popt_Nachlauf_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Popt_Nachlauf_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FernwartungVertrag_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FernwartungVertrag_akt')],
            'value': values[heatpumpParameterMap.get('ID_FernwartungVertrag_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_FernwartungAktuZeit': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FernwartungAktuZeit')],
            'value': values[heatpumpParameterMap.get('ID_FernwartungAktuZeit')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Nominal_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Nominal_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Nominal_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Minimal_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Minimal_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Minimal_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Waermemenge_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Waermemenge_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Waermemenge_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Versorgung_Korrektur_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Wm_Versorgung_Korrektur_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Wm_Versorgung_Korrektur_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Auswertung_Korrektur_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Wm_Auswertung_Korrektur_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Wm_Auswertung_Korrektur_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SoftwareUpdateJetztGemacht_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SoftwareUpdateJetztGemacht_akt')],
            'value': values[heatpumpParameterMap.get('ID_SoftwareUpdateJetztGemacht_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SerienNummer_DATUM': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SerienNummer_DATUM')],
            'value': values[heatpumpParameterMap.get('ID_WP_SerienNummer_DATUM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SerienNummer_HEX': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SerienNummer_HEX')],
            'value': values[heatpumpParameterMap.get('ID_WP_SerienNummer_HEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SerienNummer_INDEX': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SerienNummer_INDEX')],
            'value': values[heatpumpParameterMap.get('ID_WP_SerienNummer_INDEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_ProgWerteWebSrvBeobarten': {
            'rawvalue': values[heatpumpParameterMap.get('ID_ProgWerteWebSrvBeobarten')],
            'value': values[heatpumpParameterMap.get('ID_ProgWerteWebSrvBeobarten')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_BW': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_BW')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_BW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_SW': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_SW')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_SW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Datum': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_Datum')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_Datum')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Solar_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Solar_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Solar_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_BSTD_Solar': {
            'rawvalue': values[heatpumpParameterMap.get('ID_BSTD_Solar')],
            'value': values[heatpumpParameterMap.get('ID_BSTD_Solar')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TDC_Koll_Max_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TDC_Koll_Max_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TDC_Koll_Max_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Akt_Kuehlung_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Akt_Kuehlung_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Akt_Kuehlung_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorlauf_VBO_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Vorlauf_VBO_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Vorlauf_VBO_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_KRHyst_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_KRHyst_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_KRHyst_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Akt_Kuehl_Speicher_min_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Akt_Kuehl_Speicher_min_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Akt_Kuehl_Speicher_min_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Akt_Kuehl_Freig_WQE_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Akt_Kuehl_Freig_WQE_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Akt_Kuehl_Freig_WQE_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_NDAB_WW_Anzahl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_NDAB_WW_Anzahl')],
            'value': values[heatpumpParameterMap.get('ID_NDAB_WW_Anzahl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_NDS_WW_KD_Quitt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_NDS_WW_KD_Quitt')],
            'value': values[heatpumpParameterMap.get('ID_NDS_WW_KD_Quitt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_AbtZykMin_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_AbtZykMin_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_AbtZykMin_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_VD2_Zeit_Min_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_VD2_Zeit_Min_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_VD2_Zeit_Min_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Hysterese_HR_verkuerzt_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Hysterese_HR_verkuerzt_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Hysterese_HR_verkuerzt_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BA_Lueftung_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BA_Lueftung_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BA_Lueftung_akt')],
            'name': 'Lüftung',
            'calculationrule': '0 = Automatik;1 = Party;2 = Ferien;3 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SuLuf_akt')],
            'name': 'Aktive Lüftungszeiten',
            'calculationrule': '4 = 5+2(Mo-Fr,Sa-So);3 = Woche (Mo-So); 5 = Tage (Mo,Di,...)',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_0_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_0_0_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_0_0_0')]),
            'name': 'Schaltuhr Lüftung Woche (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_0_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_0_1_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_0_1_0')]),
            'name': 'Schaltuhr Lüftung Woche (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_0_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_0_2_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_0_2_0')]),
            'name': 'Schaltuhr Lüftung Woche (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_0_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_0_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_1_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_1_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_2_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_2_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_0_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_0_2')]),
            'name': 'Schaltuhr Lüftung Sa-So (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_1_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_1_2')]),
            'name': 'Schaltuhr Lüftung Sa-So (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_0_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_2_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_0_2_2')]),
            'name': 'Schaltuhr Lüftung Sa-So (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_0')]),
            'name': 'Schaltuhr Lüftung So (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_0')]),
            'name': 'Schaltuhr Lüftung So (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_0')]),
            'name': 'Schaltuhr Lüftung So (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_2')]),
            'name': 'Schaltuhr Lüftung Mo (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_2')]),
            'name': 'Schaltuhr Lüftung Mo (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_2')]),
            'name': 'Schaltuhr Lüftung Mo (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_4')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_4')]),
            'name': 'Schaltuhr Lüftung Di (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_4')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_4')]),
            'name': 'Schaltuhr Lüftung Di (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_4')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_4')]),
            'name': 'Schaltuhr Lüftung Di (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_6')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_6')]),
            'name': 'Schaltuhr Lüftung Mi (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_6')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_6')]),
            'name': 'Schaltuhr Lüftung Mi (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_6')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_6')]),
            'name': 'Schaltuhr Lüftung Mi (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_8')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_8')]),
            'name': 'Schaltuhr Lüftung Do (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_8')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_8')]),
            'name': 'Schaltuhr Lüftung Do (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_8')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_8')]),
            'name': 'Schaltuhr Lüftung Do (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_10')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_10')]),
            'name': 'Schaltuhr Lüftung Fr (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_10')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_10')]),
            'name': 'Schaltuhr Lüftung Fr (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_10')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_10')]),
            'name': 'Schaltuhr Lüftung Fr (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_12')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_0_12')]),
            'name': 'Schaltuhr Lüftung Sa (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_12')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_1_12')]),
            'name': 'Schaltuhr Lüftung Sa (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_0_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_12')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_0_2_12')]),
            'name': 'Schaltuhr Lüftung Sa (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_1_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_1_0_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_1_0_0')]),
            'name': 'Schaltuhr Lüftung Woche Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_1_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_1_1_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_1_1_0')]),
            'name': 'Schaltuhr Lüftung Woche Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufWo_zeit_1_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_1_2_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufWo_zeit_1_2_0')]),
            'name': 'Schaltuhr Lüftung Woche Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_0_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_0_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_1_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_1_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_2_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_2_0')]),
            'name': 'Schaltuhr Lüftung Mo-Fr Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_0_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_0_2')]),
            'name': 'Schaltuhr Lüftung Sa-So Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_1_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_1_2')]),
            'name': 'Schaltuhr Lüftung Sa-So Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLuf25_zeit_1_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_2_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLuf25_zeit_1_2_2')]),
            'name': 'Schaltuhr Lüftung Sa-So Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_0')]),
            'name': 'Schaltuhr Lüftung So Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_0')]),
            'name': 'Schaltuhr Lüftung So Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_0')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_0')]),
            'name': 'Schaltuhr Lüftung So Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_2')]),
            'name': 'Schaltuhr Lüftung Mo Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_2')]),
            'name': 'Schaltuhr Lüftung Mo Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_2')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_2')]),
            'name': 'Schaltuhr Lüftung Mo Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_4')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_4')]),
            'name': 'Schaltuhr Lüftung Di Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_4')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_4')]),
            'name': 'Schaltuhr Lüftung Di Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_4': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_4')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_4')]),
            'name': 'Schaltuhr Lüftung Di Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_6')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_6')]),
            'name': 'Schaltuhr Lüftung Mi Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_6')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_6')]),
            'name': 'Schaltuhr Lüftung Mi Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_6': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_6')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_6')]),
            'name': 'Schaltuhr Lüftung Mi Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_8')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_8')]),
            'name': 'Schaltuhr Lüftung Do Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_8')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_8')]),
            'name': 'Schaltuhr Lüftung Do Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_8': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_8')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_8')]),
            'name': 'Schaltuhr Lüftung Do Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_10')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_10')]),
            'name': 'Schaltuhr Lüftung Fr Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_10')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_10')]),
            'name': 'Schaltuhr Lüftung Fr Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_10': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_10')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_10')]),
            'name': 'Schaltuhr Lüftung Fr Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_0_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_12')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_0_12')]),
            'name': 'Schaltuhr Lüftung Sa Nacht (1) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_1_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_12')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_1_12')]),
            'name': 'Schaltuhr Lüftung Sa Nacht (2) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SuLufTg_zeit_1_2_12': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_12')],
            'value': utils.createFromToTime(values[heatpumpParameterMap.get('ID_Einst_SuLufTg_zeit_1_2_12')]),
            'name': 'Schaltuhr Lüftung Sa Nacht (3) von-bis',
            'calculationrule': 'fromValue in Minutes = value %  65536; toValue in minutes = (value - fromValue) / 65536;',
            'unit': '',
			'writeable': false
		},
        'ID_FerienModusAktivLueftung': {
            'rawvalue': values[heatpumpParameterMap.get('ID_FerienModusAktivLueftung')],
            'value': values[heatpumpParameterMap.get('ID_FerienModusAktivLueftung')],
            'name': 'Ferienmodus Lüftung',
            'calculationrule': '0 = deaktiviert; 1 = aktiviert',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BA_Lueftung_saved': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BA_Lueftung_saved')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BA_Lueftung_saved')],
            'name': 'Ferienmodus nach Ferienprogram',
            'calculationrule': '0 = Automatik;1 = Party;3 = Aus',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FrkdLueftung': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FrkdLueftung')],
            'value': new Date(values[heatpumpParameterMap.get('ID_SU_FrkdLueftung')] * 1000).toUTCString(),
            'name': 'Lüftung - Ferien bis',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SU_FstdLueftung': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SU_FstdLueftung')],
            'value':  new Date(values[heatpumpParameterMap.get('ID_SU_FstdLueftung')] * 1000).toUTCString(),
            'name': 'Lüftung - Ferien von',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Feuchteschutz_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Feuchteschutz_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Feuchteschutz_akt')],
            'name': 'Lüftung Feuchteschutz',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Einst_Luf_Reduziert_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Reduziert_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Reduziert_akt')],
            'name': 'Lüftung Reduziert',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Einst_Luf_Nennlueftung_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Nennlueftung_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Nennlueftung_akt')],
            'name': 'Lüftung Nennbetrieb',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Einst_Luf_Intensivlueftung_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Intensivlueftung_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Intensivlueftung_akt')],
            'name': 'Lüftung Intesivlüftung',
            'calculationrule': '',
            'unit': 'm³/h',
			'writeable': false
		},
        'ID_Timer_Fil_4Makt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Timer_Fil_4Makt')],
            'value': values[heatpumpParameterMap.get('ID_Timer_Fil_4Makt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Timer_Fil_WoAkt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Timer_Fil_WoAkt')],
            'value': values[heatpumpParameterMap.get('ID_Timer_Fil_WoAkt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_KuCft3_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_KuCft3_akt')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_KuCft3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Sollwert_AtDif3_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Sollwert_AtDif3_akt')],
            'value': values[heatpumpParameterMap.get('ID_Sollwert_AtDif3_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Bitmaske_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Bitmaske_0')],
            'value': values[heatpumpParameterMap.get('ID_Bitmaske_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Lueftungsstufen': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Lueftungsstufen')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Lueftungsstufen')],
            'name': 'Lüftungsstufe',
            'calculationrule': '1 = 300m³/h;2 = 400m³/h',
            'unit': '',
			'writeable': false
		},
        'ID_SysEin_Meldung_TDI': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SysEin_Meldung_TDI')],
            'value': values[heatpumpParameterMap.get('ID_SysEin_Meldung_TDI')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SysEin_Typ_WZW': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SysEin_Typ_WZW')],
            'value': values[heatpumpParameterMap.get('ID_SysEin_Typ_WZW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BACnet_aktiviert': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BACnet_aktiviert')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BACnet_aktiviert')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_BW_max': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_BW_max')],
            'value': values[heatpumpParameterMap.get('ID_Einst_BW_max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Sollwert_TRL_Kuehlen': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Sollwert_TRL_Kuehlen')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Sollwert_TRL_Kuehlen')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Medium_Waermequelle': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Medium_Waermequelle')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Medium_Waermequelle')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Photovoltaik_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Photovoltaik_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Photovoltaik_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Multispeicher_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Multispeicher_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Multispeicher_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_PKuehlTime_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_PKuehlTime_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_PKuehlTime_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Minimale_Ruecklaufsolltemperatur': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Minimale_Ruecklaufsolltemperatur')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Minimale_Ruecklaufsolltemperatur')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Einflussfaktor_RT_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_RBE_Einflussfaktor_RT_akt')],
            'value': values[heatpumpParameterMap.get('ID_RBE_Einflussfaktor_RT_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Freigabe_Kuehlung_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_RBE_Freigabe_Kuehlung_akt')],
            'value': values[heatpumpParameterMap.get('ID_RBE_Freigabe_Kuehlung_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Waermeverteilsystem_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_RBE_Waermeverteilsystem_akt')],
            'value': values[heatpumpParameterMap.get('ID_RBE_Waermeverteilsystem_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_RBE_Zeit_Heizstab_aktiv': {
            'rawvalue': values[heatpumpParameterMap.get('ID_RBE_Zeit_Heizstab_aktiv')],
            'value': values[heatpumpParameterMap.get('ID_RBE_Zeit_Heizstab_aktiv')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SEC_ND_Alarmgrenze': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SEC_ND_Alarmgrenze')],
            'value': values[heatpumpParameterMap.get('ID_SEC_ND_Alarmgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SEC_HD_Alarmgrenze': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SEC_HD_Alarmgrenze')],
            'value': values[heatpumpParameterMap.get('ID_SEC_HD_Alarmgrenze')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_SEC_Abtauendtemperatur': {
            'rawvalue': values[heatpumpParameterMap.get('ID_SEC_Abtauendtemperatur')],
            'value': values[heatpumpParameterMap.get('ID_SEC_Abtauendtemperatur')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Min_RPM_BW': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Min_RPM_BW')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Min_RPM_BW')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Feuchteschutz_Faktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Feuchteschutz_Faktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Feuchteschutz_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Reduziert_Faktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Reduziert_Faktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Reduziert_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Nennlueftung_Faktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Nennlueftung_Faktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Nennlueftung_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Luf_Intensivlueftung_Faktor_akt': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Luf_Intensivlueftung_Faktor_akt')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Luf_Intensivlueftung_Faktor_akt')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Freigabe_Zeit_ZWE': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Freigabe_Zeit_ZWE')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Freigabe_Zeit_ZWE')],
            'name': 'Freigabe zweiter Wärmeerzeuger nach',
            'calculationrule': '',
            'unit': 'min',
			'writeable': false
		},
        'ID_Einst_min_VL_Kuehl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_min_VL_Kuehl')],
            'value': values[heatpumpParameterMap.get('ID_Einst_min_VL_Kuehl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Warmwasser_Nachheizung': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Warmwasser_Nachheizung')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Warmwasser_Nachheizung')],
            'name': 'Trinkwarmwassertemperatur mit Nachheizung',
            'calculationrule': '',
            'unit': 'boolean',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_0_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_0_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_0_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_1_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_1_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_1_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_2_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_2_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_2_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_3_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_3_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_3_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_4_0': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_4_0')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_4_0')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_0_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_0_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_0_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_1_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_1_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_1_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_2_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_2_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_2_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_3_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_3_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_3_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_file_LWD2_4_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_4_1')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_file_LWD2_4_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Switchoff_index_LWD2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Switchoff_index_LWD2')],
            'value': values[heatpumpParameterMap.get('ID_Switchoff_index_LWD2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Nominal_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Nominal_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Nominal_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Effizienzpumpe_Minimal_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Minimal_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Effizienzpumpe_Minimal_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Versorgung_Korrektur_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Wm_Versorgung_Korrektur_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Wm_Versorgung_Korrektur_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Wm_Auswertung_Korrektur_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Wm_Auswertung_Korrektur_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Wm_Auswertung_Korrektur_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_isTwin': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_isTwin')],
            'value': values[heatpumpParameterMap.get('ID_Einst_isTwin')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TAmin_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TAmin_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TAmin_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVLmax_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVLmax_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TA_EG_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TA_EG_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TA_EG_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_TVLmax_EG_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_TVLmax_EG_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_TVLmax_EG_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Hz_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_Hz_2')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_Hz_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_BW_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_BW_2')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_BW_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_SW_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_SW_2')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_SW_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_ab_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_ab_2')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_ab_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Entl_Typ_15_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_15_2')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Entl_Typ_15_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_WW_Nachheizung_max': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_WW_Nachheizung_max')],
            'value': (values[heatpumpParameterMap.get('ID_Einst_WW_Nachheizung_max')] + 2) / 2,
            'name': 'Warmwasser Nachheizung max',
            'calculationrule': '0 = 1h; 1 = 1,5h; 2 = 2h; 3 = 2,5h, ... 17 = 9,5h; 18 = 10h ==> (value + 2)/2',
            'unit': 'h',
			'writeable': false
		},
        'ID_Einst_Kuhl_Zeit_Ein_RT': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Kuhl_Zeit_Ein_RT')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Kuhl_Zeit_Ein_RT')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE1_Pos': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE1_Pos')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE1_Pos')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE2_Pos': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE2_Pos')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE2_Pos')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_ZWE3_Pos': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_ZWE3_Pos')],
            'value': values[heatpumpParameterMap.get('ID_Einst_ZWE3_Pos')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Leistung_ZWE': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Leistung_ZWE')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Leistung_ZWE')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN2_DATUM': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SN2_DATUM')],
            'value': values[heatpumpParameterMap.get('ID_WP_SN2_DATUM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN2_HEX': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SN2_HEX')],
            'value': values[heatpumpParameterMap.get('ID_WP_SN2_HEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN2_INDEX': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SN2_INDEX')],
            'value': values[heatpumpParameterMap.get('ID_WP_SN2_INDEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_CWP_saved2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_CWP_saved2')],
            'value': values[heatpumpParameterMap.get('ID_CWP_saved2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SmartGrid': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SmartGrid')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SmartGrid')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_HDS': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_HDS')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_HDS')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpHeat_Max': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpHeat_Max')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpHeat_Max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpHeatCtrl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpHeatCtrl')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpHeatCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpDHWCtrl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpDHWCtrl')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpDHWCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpDHW_RPM': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpDHW_RPM')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpDHW_RPM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpPoolCtrl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpPoolCtrl')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpPoolCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpPool_RPM': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpPool_RPM')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpPool_RPM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpCool_RPM': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpCool_RPM')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpCool_RPM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpVBOCtrl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpVBOCtrl')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpVBOCtrl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpVBO_RPM_C': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpVBO_RPM_C')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpVBO_RPM_C')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpDHW_Max': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpDHW_Max')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpDHW_Max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_PumpPool_Max': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_PumpPool_Max')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_PumpPool_Max')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_Sperrband_1': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_Sperrband_1')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_Sperrband_1')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_Leistungsfreigabe': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_Leistungsfreigabe')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_Leistungsfreigabe')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_DHW_Freq': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_DHW_Freq')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_DHW_Freq')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_SWHUP': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_SWHUP')],
            'value': values[heatpumpParameterMap.get('ID_Einst_SWHUP')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_P155_SWB_Freq': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_P155_SWB_Freq')],
            'value': values[heatpumpParameterMap.get('ID_Einst_P155_SWB_Freq')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK1_Regelung': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK1_Regelung')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK1_Regelung')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK2_Regelung': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK2_Regelung')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK2_Regelung')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_MK3_Regelung': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_MK3_Regelung')],
            'value': values[heatpumpParameterMap.get('ID_Einst_MK3_Regelung')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_PV_WW_Sperrzeit': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_PV_WW_Sperrzeit')],
            'value': values[heatpumpParameterMap.get('ID_Einst_PV_WW_Sperrzeit')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Warmwasser_extra': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Warmwasser_extra')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Warmwasser_extra')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorl_akt_Kuehl': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Vorl_akt_Kuehl')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Vorl_akt_Kuehl')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN3_DATUM': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SN3_DATUM')],
            'value': values[heatpumpParameterMap.get('ID_WP_SN3_DATUM')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN3_HEX': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SN3_HEX')],
            'value': values[heatpumpParameterMap.get('ID_WP_SN3_HEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_WP_SN3_INDEX': {
            'rawvalue': values[heatpumpParameterMap.get('ID_WP_SN3_INDEX')],
            'value': values[heatpumpParameterMap.get('ID_WP_SN3_INDEX')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Vorlauf_ZUP': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Vorlauf_ZUP')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Vorlauf_ZUP')],
            'name': 'Vorlauf Zusatzumwälzpumpe',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Einst_Abtauen_im_Warmwasser': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Einst_Abtauen_im_Warmwasser')],
            'value': values[heatpumpParameterMap.get('ID_Einst_Abtauen_im_Warmwasser')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_ZWE': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_ZWE')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_ZWE')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Reset': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_Reset')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_Reset')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'ID_Waermemenge_Reset_2': {
            'rawvalue': values[heatpumpParameterMap.get('ID_Waermemenge_Reset_2')],
            'value': values[heatpumpParameterMap.get('ID_Waermemenge_Reset_2')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        'AnzahlParameterInit': {
            'rawvalue': values[heatpumpParameterMap.get('AnzahlParameterInit')],
            'value': values[heatpumpParameterMap.get('AnzahlParameterInit')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1063': {
            'rawvalue': values[heatpumpParameterMap.get('1063')],
            'value': values[heatpumpParameterMap.get('1063')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1064': {
            'rawvalue': values[heatpumpParameterMap.get('1064')],
            'value': values[heatpumpParameterMap.get('1064')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1065': {
            'rawvalue': values[heatpumpParameterMap.get('1065')],
            'value': values[heatpumpParameterMap.get('1065')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1066': {
            'rawvalue': values[heatpumpParameterMap.get('1066')],
            'value': values[heatpumpParameterMap.get('1066')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1067': {
            'rawvalue': values[heatpumpParameterMap.get('1067')],
            'value': values[heatpumpParameterMap.get('1067')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1068': {
            'rawvalue': values[heatpumpParameterMap.get('1068')],
            'value': values[heatpumpParameterMap.get('1068')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1069': {
            'rawvalue': values[heatpumpParameterMap.get('1069')],
            'value': values[heatpumpParameterMap.get('1069')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1070': {
            'rawvalue': values[heatpumpParameterMap.get('1070')],
            'value': values[heatpumpParameterMap.get('1070')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1071': {
            'rawvalue': values[heatpumpParameterMap.get('1071')],
            'value': values[heatpumpParameterMap.get('1071')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1072': {
            'rawvalue': values[heatpumpParameterMap.get('1072')],
            'value': values[heatpumpParameterMap.get('1072')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1073': {
            'rawvalue': values[heatpumpParameterMap.get('1073')],
            'value': values[heatpumpParameterMap.get('1073')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1074': {
            'rawvalue': values[heatpumpParameterMap.get('1074')],
            'value': values[heatpumpParameterMap.get('1074')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1075': {
            'rawvalue': values[heatpumpParameterMap.get('1075')],
            'value': values[heatpumpParameterMap.get('1075')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1076': {
            'rawvalue': values[heatpumpParameterMap.get('1076')],
            'value': values[heatpumpParameterMap.get('1076')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1077': {
            'rawvalue': values[heatpumpParameterMap.get('1077')],
            'value': values[heatpumpParameterMap.get('1077')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1078': {
            'rawvalue': values[heatpumpParameterMap.get('1078')],
            'value': values[heatpumpParameterMap.get('1078')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1079': {
            'rawvalue': values[heatpumpParameterMap.get('1079')],
            'value': values[heatpumpParameterMap.get('1079')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1080': {
            'rawvalue': values[heatpumpParameterMap.get('1080')],
            'value': values[heatpumpParameterMap.get('1080')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1081': {
            'rawvalue': values[heatpumpParameterMap.get('1081')],
            'value': values[heatpumpParameterMap.get('1081')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1082': {
            'rawvalue': values[heatpumpParameterMap.get('1082')],
            'value': values[heatpumpParameterMap.get('1082')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1083': {
            'rawvalue': values[heatpumpParameterMap.get('1083')],
            'value': values[heatpumpParameterMap.get('1083')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1084': {
            'rawvalue': values[heatpumpParameterMap.get('1084')],
            'value': values[heatpumpParameterMap.get('1084')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
        '?1085': {
            'rawvalue': values[heatpumpParameterMap.get('1085')],
            'value': values[heatpumpParameterMap.get('1085')],
            'name': '',
            'calculationrule': '',
            'unit': '',
			'writeable': false
		},
   };
}

module.exports =  {
    heatpumpParameterMap,
    getRawHeatPumpParameters
};