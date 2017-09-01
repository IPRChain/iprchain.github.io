/**
 * Created by jojopoper on 2017/08/31.
 */

var IndexController = {
    uiView : {},


    initController : function() {
        GetLanguage();
        this.initView();
        this.initStrings();
    },

    initView : function() {
        if(mLanguage == 'cn') {
            this.uiView.id_head_home_cap = '主页';
            this.uiView.id_head_intro_cap = '简介';
            this.uiView.id_head_ipr_cap = '知识产权';
            this.uiView.id_head_ipchain_cap = '知链';
            this.uiView.id_head_news_cap = '动态';
            this.uiView.id_head_team_cap = '团队';
            this.uiView.id_head_partner_cap = '合作伙伴';

            this.uiView.id_page1_head_cap = '强国知识产权区块链 - <label style="color: lightgrey;">知链</label>';
            this.uiView.id_page1_subhead_cap = '让人类自由地创造，让创造自动地流转，让创造、经营和投资得以高效地进行';
            this.uiView.id_page1_language_btn_cap = 'English';
            this.uiView.id_page1_whitebook_dl_cap = '下载白皮书';

            this.uiView.id_page2_head_cap = '知链 简介';
            this.uiView.id_page2_subhead_cap = '知链有效联结知识、知识产权、产业技术、货币资产，以人工智能为各类主体赋能';
            this.uiView.id_page2_ki_head_cap = '知识/信息';
            this.uiView.id_page2_ki_subhead_cap = '科研人员研究成果与论文等比较严肃 相对正确 实用有效的信息';
            this.uiView.id_page2_ipr_head_cap = '知识产权';
            this.uiView.id_page2_ipr_subhead_cap = '国家赋予智力劳动成果创造者一定时间的专有权 将知识转变为生产力的重要一环';
            this.uiView.id_page2_tech_head_cap = '产业技术';
            this.uiView.id_page2_tech_subhead_cap = '生产技术的体系化 作为知识的技术嵌入产业系统 完成知识产业化';
            this.uiView.id_page2_asset_head_cap = '货币资产';
            this.uiView.id_page2_asset_subhead_cap = '知链数字资产标定转换';

            this.uiView.id_page3_head_cap = '知识产权';
            this.uiView.id_page3_sub_head_cap = '知识产权是关于人类在社会实践中创造的智力劳动成果的专有权利';
            this.uiView.id_page3_memo_cap = ' 知识产权 也称其为“知识所属权” 指“权利人对其智力劳动所创作的成果享有的财产权利” ';
            this.uiView.id_page3_ipr_Etymology_head_cap = '<strong style="color: black;">词源</strong>';
            this.uiView.id_page3_ipr_Etymology_memo_cap = '英文为“intellectual property”，其原意为“知识所有权”或者“智慧所有权”，也称为智力成果权，通常称之为智慧财产权或智力财产权';
            this.uiView.id_page3_ipr_conception_head_cap = '<strong style="color: black;">概念</strong>';
            this.uiView.id_page3_ipr_conception_memo_cap = '知识产权从本质上说是一种无形财产权，是智力劳动成果所依法享有的专有权利，受到国家法律的保护，具有价值和使用价值';
            this.uiView.id_page3_ipr_type_head_cap = '<strong style="color: black;">类型</strong>';
            this.uiView.id_page3_ipr_type_memo_cap = '知识产权大致分为两个类型：<br> 一类是著作权（也称为版权、文学产权），另一类是工业产权（也称为产业产权）';
            this.uiView.id_page3_ipr_ri_head_cap = '<strong style="color: black;">权益</strong>';
            this.uiView.id_page3_ipr_ri_memo_cap = '知识产权的权益大致分为：<br> 一种是个人身权利（分为精神权利和经济权利），另一种是财产权利（报酬或者奖励）';

            this.uiView.id_page4_head_cap = '动态';
            this.uiView.id_page4_news1_head_cap = '<i class="fa fa-inbox"></i> 新闻动态';
            this.uiView.id_page4_news1_memo_cap = ' 北京强国知识产权研究院&中国信息通信研究院知识产权中心合办<br> <strong>“知识产权与区块链技术研讨会暨强国知链发布会”</strong> <br>即将召开';
            this.uiView.id_page4_anno_head_cap = '<i class="fa fa-podcast"></i> 公告发布';
            this.uiView.id_page4_anno_memo_cap = ' <strong>知识产权与区块链技术研讨会暨强国知链发布会</strong>';

            this.uiView.id_page5_head_cap = '知链';
            this.uiView.id_page5_subhead_cap = '知识产权与区块链的完美结合';
            this.uiView.id_page5_memo_cap = ' 知链是一个去中心化的平台，它的运营主体是强国知识产权区块链基金会。利用区块链技术与多年深耕在知识产权行业的沉淀相融合，对世界知识产权行业做出贡献。 ';
            this.uiView.id_page5_team_head_cap = '技术团队';
            this.uiView.id_page5_team_sub1_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多年区块链行业背景</b>';
            this.uiView.id_page5_team_sub2_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多年知识产权行业背景</b>';
            this.uiView.id_page5_team_sub3_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>国内知名院校团队组合</b>';
            this.uiView.id_page5_team_sub4_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>强大的专家团队技术支撑</b>';
            this.uiView.id_page5_team_sub5_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>专业、专注区块链技术落地</b>';
            this.uiView.id_page5_arch_head_cap = '技术架构';
            this.uiView.id_page5_arch_sub1_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>针对知识体系量身定做</b>';
            this.uiView.id_page5_arch_sub2_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>集合知识产权的实际需求</b>';
            this.uiView.id_page5_arch_sub3_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>结合现有区块链技术的优势</b>';
            this.uiView.id_page5_arch_sub4_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>采用模块化设计思想</b>';
            this.uiView.id_page5_arch_sub5_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多层结构 接口合理 代码开源</b>';
            this.uiView.id_page5_open_head_cap = '公正/公开';
            this.uiView.id_page5_open_sub1_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>针对知识体系量身定做</b>';
            this.uiView.id_page5_open_sub2_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>集合知识产权的实际需求</b>';
            this.uiView.id_page5_open_sub3_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>结合现有区块链技术的优势</b>';
            this.uiView.id_page5_open_sub4_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>采用模块化设计思想</b>';
            this.uiView.id_page5_open_sub5_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多层结构 接口合理 代码开源</b>';

            this.uiView.id_page6_head_cap = '团队介绍';
            this.uiView.id_page6_subhead_cap = '我们的团队来自于知识产权和区块链行业的人才';
            this.uiView.id_page6_memo_cap = '专业 专注 专心 团队阵容强大，来自于国内知名院校，知识产权行业深耕多年人才，区块链行业开发经验丰富，我们致力于知识到生产力的转化。';
            this.uiView.id_page6_team_memo1_cap = '<h1>杨旭日</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 北京大学社会学系研究生毕业，北京大学国际知识产权中心兼职研究员，国家律师学院兼职教授，北京强国研究院创始人。2000年初创办“考上网”，后入北大方正，从事技术研究、项目管理以及知识产权管理，是我国著名的知识产权专家，为中国知识产权研究会学术顾问委员，国家知识产权局领军人才。在知识产权管理、技术转移、创业投资方面具有丰富的经验</p>';
            this.uiView.id_page6_team_memo2_cap = '<h1>李立中</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 宁圣金融集团、汇金金融控股股份有限公司总裁、CEO、合伙人，在宁圣金融集团区块链相关发明专利十五项；曾任阿里巴巴蚂蚁金服集团财富事业群总裁助理，阿里工作期间提交受理五十余项发明专利；曾任营口银行总行科技部总经理，分行运营管理部副总经理。兼任中国信息化协同创新专委会副秘书长、新金融俱乐部发起人、中国电子学会计算机取证专家委员会委员、北邮在线互联网金融教育学院高级讲师、互联网保险论坛高级研究员</p>';
            this.uiView.id_page6_team_memo3_cap = '<h1>谢晓健</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 北京大学哲学博士，在加密数字货币与区块链行业有多年从业经验，对区块链社区治理有系统性见解</p>';
            this.uiView.id_page6_team_memo4_cap = '<h1>李晓健</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 北京邮电大学通信专业硕士， 曾任职于知名大型互联网公司以及大型央企，从事区块链开发管理工作，并具有丰富的区块链运营经验</p>';
            this.uiView.id_page6_team_memo5_cap = '<h1>何海雷</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> ebitgo创始人，北京账通科技前联合创始人，曾给乐视金融开发独立区块链，并曾长期在亿阳信通与其他网络通讯公司任职产品经理并负责研发，在区块链与加密数字货币行业有多年技术经验，并对该行业技术发展有独特见解</p>';
            this.uiView.id_page6_team_memo6_cap = '<h1>程宽</h1><h6>顾问</h6><p class="text-left"><strong>中国国籍</strong> 清华大学物理学硕士，北京账通科技联合创始人，区块链专家，在加密数字货币与区块链行业有多年开发经验与项目运行经验，对比特币区块链技术与恒星区块链技术有非常深入的研究</p>';
            this.uiView.id_page6_team_memo7_cap = '<h1>张元林</h1><h6>投资人</h6><p class="text-left"><strong>中国国籍</strong> 著名投资人，曾任北大方正集团公司投资副总，中国文化产业基金投资副总，也是千程投资公司的负责人。在投资领域有过近百个投资项目</p>';
            this.uiView.id_page6_team_memo8_cap = '<h1>严圣</h1><h6>投资人</h6><p class="text-left"><strong>中国国籍</strong> 中国派富基金创始人，高智发明中国区总裁，公司总部设立于美国华盛顿州，是世界上专注于知识产权投资和应用的超大型基金公司。在加入高智前，在美国国际集团金融产品公司担任董事总经理并负责中国区业务。 严先生拥有在投资银行，商业银行和基金管理公司的管理和实干经验尤其是在融资，证券销售和交易以及财务顾问等方面有着独特的专长</p>';

            //this.uiView.id_page7_head_cap = '合作伙伴';

            this.uiView.id_foot_subhead_cap = '本网站所列文档全部由 <strong>知链</strong> &copy; 版权所有';
            this.uiView.id_foot_qq_cap = '<h4>QQ群号</h4><ul class="list-unstyled"><li>667950733</li></ul>';
            this.uiView.id_foot_email_cap = '<h4>电子邮件</h4><ul class="list-unstyled"><li><a href="mailto:support@xipr.com">support@xipr.com</a></li></ul>';
        } else {
            this.uiView.id_head_home_cap = 'Home';
            this.uiView.id_head_intro_cap = 'Introduction';
            this.uiView.id_head_ipr_cap = 'IPR';
            this.uiView.id_head_ipchain_cap = 'IPRChain';
            this.uiView.id_head_news_cap = 'News';
            this.uiView.id_head_team_cap = 'Team';
            this.uiView.id_head_partner_cap = 'Partner';

            this.uiView.id_page1_head_cap = 'Powernation Intellectual Property Blockchain - <label style="color: lightgrey;">IPR Chain</label>';
            this.uiView.id_page1_subhead_cap = '<label>Set the human creativity free, make creativity transfer by itself, let creativity, business and investment go efficiently</label>';
            this.uiView.id_page1_language_btn_cap = '中文';
            this.uiView.id_page1_whitebook_dl_cap = 'White paper';

            this.uiView.id_page2_head_cap = 'IPRChain Introduction';
            this.uiView.id_page2_subhead_cap = 'IPR Chain connects knowledge, IP, industrial technology, monetary assets with AI as energy';
            this.uiView.id_page2_ki_head_cap = 'Knowledge and Information';
            this.uiView.id_page2_ki_subhead_cap = 'Serious, relevantly right and useful information from scientific researches and papers';
            this.uiView.id_page2_ipr_head_cap = 'IPR';
            this.uiView.id_page2_ipr_subhead_cap = 'Nation entitles intellectual work owner with terminable and exclusive right which greatly promote the transfer from knowledge into productivity';
            this.uiView.id_page2_tech_head_cap = 'Industrial Technology';
            this.uiView.id_page2_tech_subhead_cap = 'Systematism of production technology,and the technology as knowledge is instead in the industry system, to achieve the industrialization of knowledge';
            this.uiView.id_page2_asset_head_cap = 'Monetary Assets';
            this.uiView.id_page2_asset_subhead_cap = 'Calibration and transfer of IP Chain digital asset';

            this.uiView.id_page3_head_cap = 'IPR';
            this.uiView.id_page3_sub_head_cap = 'Intellectual property is about the exclusive right of human\'s intellect work created in social practice';
            this.uiView.id_page3_memo_cap = ' Intellectual Property, also known as the ownership of knowledge, is the property right of the intellect work created by the righter';
            this.uiView.id_page3_ipr_Etymology_head_cap = '<strong style="color: black;">Etymology</strong>';
            this.uiView.id_page3_ipr_Etymology_memo_cap = 'Intellectual property means the ownership of knowledge or ownership of wisdom, also as intellect work right, is usually used as wisdom property right or intellect property right';
            this.uiView.id_page3_ipr_conception_head_cap = '<strong style="color: black;">Conception</strong>';
            this.uiView.id_page3_ipr_conception_memo_cap = 'In essence, Intellectual Property is an intangible property and an exclusive right of intellectual work granted by law, which is protected by nation law, and is valuable and has use value';
            this.uiView.id_page3_ipr_type_head_cap = '<strong style="color: black;">Type</strong>';
            this.uiView.id_page3_ipr_type_memo_cap = 'Intellectual property is divided into two parts: <br> one is copyright(or literary property )<br>another is industrial property<br>&nbsp;';
            this.uiView.id_page3_ipr_ri_head_cap = '<strong style="color: black;">Rights & Interests</strong>';
            this.uiView.id_page3_ipr_ri_memo_cap = 'The right of intellectual property is seperated into <br> personal right (includes moral right and economic right) and property right (payment or award)';

            this.uiView.id_page4_head_cap = 'News';
            this.uiView.id_page4_news1_head_cap = '<i class="fa fa-inbox"></i> News Information';
            this.uiView.id_page4_news1_memo_cap = ' 北京强国知识产权研究院&中国信息通信研究院知识产权中心合办<br> <strong>“知识产权与区块链技术研讨会暨强国知链发布会”</strong> <br>即将召开';
            this.uiView.id_page4_anno_head_cap = '<i class="fa fa-podcast"></i> Announcement';
            this.uiView.id_page4_anno_memo_cap = ' <strong>知识产权与区块链技术研讨会暨强国知链发布会</strong>';

            this.uiView.id_page5_head_cap = 'IPR-Chain';
            this.uiView.id_page5_subhead_cap = '知识产权与区块链的完美结合';
            this.uiView.id_page5_memo_cap = ' 知链是一个去中心化的平台，它的运营主体是强国知识产权区块链基金会。利用区块链技术与多年深耕在知识产权行业的沉淀相融合，对世界知识产权行业做出贡献。 ';
            this.uiView.id_page5_team_head_cap = 'Tech-Team';
            this.uiView.id_page5_team_sub1_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多年区块链行业背景</b>';
            this.uiView.id_page5_team_sub2_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多年知识产权行业背景</b>';
            this.uiView.id_page5_team_sub3_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>国内知名院校团队组合</b>';
            this.uiView.id_page5_team_sub4_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>强大的专家团队技术支撑</b>';
            this.uiView.id_page5_team_sub5_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>专业、专注区块链技术落地</b>';
            this.uiView.id_page5_arch_head_cap = 'Tech-Architecture';
            this.uiView.id_page5_arch_sub1_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>针对知识体系量身定做</b>';
            this.uiView.id_page5_arch_sub2_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>集合知识产权的实际需求</b>';
            this.uiView.id_page5_arch_sub3_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>结合现有区块链技术的优势</b>';
            this.uiView.id_page5_arch_sub4_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>采用模块化设计思想</b>';
            this.uiView.id_page5_arch_sub5_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多层结构 接口合理 代码开源</b>';
            this.uiView.id_page5_open_head_cap = 'Fair&Public';
            this.uiView.id_page5_open_sub1_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>针对知识体系量身定做</b>';
            this.uiView.id_page5_open_sub2_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>集合知识产权的实际需求</b>';
            this.uiView.id_page5_open_sub3_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>结合现有区块链技术的优势</b>';
            this.uiView.id_page5_open_sub4_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>采用模块化设计思想</b>';
            this.uiView.id_page5_open_sub5_cap = '<i class="fa fa-certificate"></i> &nbsp; &nbsp; <b>多层结构 接口合理 代码开源</b>';

            this.uiView.id_page6_head_cap = 'Our Team';
            this.uiView.id_page6_subhead_cap = '我们的团队来自于知识产权和区块链行业的人才';
            this.uiView.id_page6_memo_cap = '专业 专注 专心 团队阵容强大，来自于国内知名院校，知识产权行业深耕多年人才，区块链行业开发经验丰富，我们致力于知识到生产力的转化。';
            this.uiView.id_page6_team_memo1_cap = '<h1>杨旭日</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 北京大学社会学系研究生毕业，北京大学国际知识产权中心兼职研究员，国家律师学院兼职教授，北京强国研究院创始人。2000年初创办“考上网”，后入北大方正，从事技术研究、项目管理以及知识产权管理，是我国著名的知识产权专家，为中国知识产权研究会学术顾问委员，国家知识产权局领军人才。在知识产权管理、技术转移、创业投资方面具有丰富的经验</p>';
            this.uiView.id_page6_team_memo2_cap = '<h1>李立中</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 宁圣金融集团、汇金金融控股股份有限公司总裁、CEO、合伙人，在宁圣金融集团区块链相关发明专利十五项；曾任阿里巴巴蚂蚁金服集团财富事业群总裁助理，阿里工作期间提交受理五十余项发明专利；曾任营口银行总行科技部总经理，分行运营管理部副总经理。兼任中国信息化协同创新专委会副秘书长、新金融俱乐部发起人、中国电子学会计算机取证专家委员会委员、北邮在线互联网金融教育学院高级讲师、互联网保险论坛高级研究员</p>';
            this.uiView.id_page6_team_memo3_cap = '<h1>谢晓健</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 北京大学哲学博士，在加密数字货币与区块链行业有多年从业经验，对区块链社区治理有系统性见解</p>';
            this.uiView.id_page6_team_memo4_cap = '<h1>李晓健</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> 北京邮电大学通信专业硕士， 曾任职于知名大型互联网公司以及大型央企，从事区块链开发管理工作，并具有丰富的区块链运营经验</p>';
            this.uiView.id_page6_team_memo5_cap = '<h1>何海雷</h1><h6>联合创始人</h6><p class="text-left"><strong>中国国籍</strong> ebitgo创始人，北京账通科技前联合创始人，曾给乐视金融开发独立区块链，并曾长期在亿阳信通与其他网络通讯公司任职产品经理并负责研发，在区块链与加密数字货币行业有多年技术经验，并对该行业技术发展有独特见解</p>';
            this.uiView.id_page6_team_memo6_cap = '<h1>程宽</h1><h6>顾问</h6><p class="text-left"><strong>中国国籍</strong> 清华大学物理学硕士，北京账通科技联合创始人，区块链专家，在加密数字货币与区块链行业有多年开发经验与项目运行经验，对比特币区块链技术与恒星区块链技术有非常深入的研究</p>';
            this.uiView.id_page6_team_memo7_cap = '<h1>张元林</h1><h6>投资人</h6><p class="text-left"><strong>中国国籍</strong> 著名投资人，曾任北大方正集团公司投资副总，中国文化产业基金投资副总，也是千程投资公司的负责人。在投资领域有过近百个投资项目</p>';
            this.uiView.id_page6_team_memo8_cap = '<h1>严圣</h1><h6>投资人</h6><p class="text-left"><strong>中国国籍</strong> 中国派富基金创始人，高智发明中国区总裁，公司总部设立于美国华盛顿州，是世界上专注于知识产权投资和应用的超大型基金公司。在加入高智前，在美国国际集团金融产品公司担任董事总经理并负责中国区业务。 严先生拥有在投资银行，商业银行和基金管理公司的管理和实干经验尤其是在融资，证券销售和交易以及财务顾问等方面有着独特的专长</p>';

            //this.uiView.id_page7_head_cap = 'Our Partner';

            this.uiView.id_foot_subhead_cap = 'The documents listed in this site are <strong>IPRChain</strong> &copy; All rights reserved';
            this.uiView.id_foot_qq_cap = '<h4>QQ Group</h4><ul class="list-unstyled"><li>667950733</li></ul>';
            this.uiView.id_foot_email_cap = '<h4>Email</h4><ul class="list-unstyled"><li><a href="mailto:support@iprchain.com">support@iprchain.com</a></li></ul>';
        }
    },

    initStrings : function() {
        $('#id_head_home_cap').text(this.uiView.id_head_home_cap);
        $('#id_head_sub_home_cap').text(this.uiView.id_head_home_cap);
        $('#id_head_intro_cap').text(this.uiView.id_head_intro_cap);
        $('#id_head_sub_intro_cap').text(this.uiView.id_head_intro_cap);
        $('#id_head_ipr_cap').text(this.uiView.id_head_ipr_cap);
        $('#id_head_sub_ipr_cap').text(this.uiView.id_head_ipr_cap);
        $('#id_head_ipchain_cap').text(this.uiView.id_head_ipchain_cap);
        $('#id_head_sub_ipchain_cap').text(this.uiView.id_head_ipchain_cap);
        $('#id_head_news_cap').text(this.uiView.id_head_news_cap);
        $('#id_head_sub_news_cap').text(this.uiView.id_head_news_cap);
        $('#id_head_team_cap').text(this.uiView.id_head_team_cap);
        $('#id_head_sub_team_cap').text(this.uiView.id_head_team_cap);
        $('#id_head_partner_cap').text(this.uiView.id_head_partner_cap);
        $('#id_head_sub_partner_cap').text(this.uiView.id_head_partner_cap);

        $('#id_page1_head_cap').html(this.uiView.id_page1_head_cap);
        $('#id_page1_subhead_cap').html(this.uiView.id_page1_subhead_cap);
        $('#id_page1_language_btn_cap').text(this.uiView.id_page1_language_btn_cap);
        $('#id_page1_whitebook_dl_cap').text(this.uiView.id_page1_whitebook_dl_cap);

        $('#id_page2_head_cap').text(this.uiView.id_page2_head_cap);
        $('#id_page2_subhead_cap').text(this.uiView.id_page2_subhead_cap);
        $('#id_page2_ki_head_cap').text(this.uiView.id_page2_ki_head_cap);
        $('#id_page2_ki_subhead_cap').text(this.uiView.id_page2_ki_subhead_cap);
        $('#id_page2_ipr_head_cap').text(this.uiView.id_page2_ipr_head_cap);
        $('#id_page2_ipr_subhead_cap').text(this.uiView.id_page2_ipr_subhead_cap);
        $('#id_page2_tech_head_cap').text(this.uiView.id_page2_tech_head_cap);
        $('#id_page2_tech_subhead_cap').text(this.uiView.id_page2_tech_subhead_cap);
        $('#id_page2_asset_head_cap').text(this.uiView.id_page2_asset_head_cap);
        $('#id_page2_asset_subhead_cap').text(this.uiView.id_page2_asset_subhead_cap);

        $('#id_page3_head_cap').text(this.uiView.id_page3_head_cap);
        $('#id_page3_sub_head_cap').text(this.uiView.id_page3_sub_head_cap);
        $('#id_page3_memo_cap').text(this.uiView.id_page3_memo_cap);
        $('#id_page3_ipr_Etymology_head_cap').html(this.uiView.id_page3_ipr_Etymology_head_cap);
        $('#id_page3_ipr_Etymology_memo_cap').text(this.uiView.id_page3_ipr_Etymology_memo_cap);
        $('#id_page3_ipr_conception_head_cap').html(this.uiView.id_page3_ipr_conception_head_cap);
        $('#id_page3_ipr_conception_memo_cap').text(this.uiView.id_page3_ipr_conception_memo_cap);
        $('#id_page3_ipr_type_head_cap').html(this.uiView.id_page3_ipr_type_head_cap);
        $('#id_page3_ipr_type_memo_cap').html(this.uiView.id_page3_ipr_type_memo_cap);
        $('#id_page3_ipr_ri_head_cap').html(this.uiView.id_page3_ipr_ri_head_cap);
        $('#id_page3_ipr_ri_memo_cap').html(this.uiView.id_page3_ipr_ri_memo_cap);

        $('#id_page4_head_cap').text(this.uiView.id_page4_head_cap);
        $('#id_page4_news1_head_cap').html(this.uiView.id_page4_news1_head_cap);
        $('#id_page4_news1_memo_cap').html(this.uiView.id_page4_news1_memo_cap);
        $('#id_page4_anno_head_cap').html(this.uiView.id_page4_anno_head_cap);
        $('#id_page4_anno_memo_cap').html(this.uiView.id_page4_anno_memo_cap);

        $('#id_page5_head_cap').text(this.uiView.id_page5_head_cap);
        $('#id_page5_subhead_cap').text(this.uiView.id_page5_subhead_cap);
        $('#id_page5_memo_cap').text(this.uiView.id_page5_memo_cap);
        $('#id_page5_team_head_cap').text(this.uiView.id_page5_team_head_cap);
        $('#id_page5_team_sub1_cap').html(this.uiView.id_page5_team_sub1_cap);
        $('#id_page5_team_sub2_cap').html(this.uiView.id_page5_team_sub2_cap);
        $('#id_page5_team_sub3_cap').html(this.uiView.id_page5_team_sub3_cap);
        $('#id_page5_team_sub4_cap').html(this.uiView.id_page5_team_sub4_cap);
        $('#id_page5_team_sub5_cap').html(this.uiView.id_page5_team_sub5_cap);
        $('#id_page5_arch_head_cap').text(this.uiView.id_page5_arch_head_cap);
        $('#id_page5_arch_sub1_cap').html(this.uiView.id_page5_arch_sub1_cap);
        $('#id_page5_arch_sub2_cap').html(this.uiView.id_page5_arch_sub2_cap);
        $('#id_page5_arch_sub3_cap').html(this.uiView.id_page5_arch_sub3_cap);
        $('#id_page5_arch_sub4_cap').html(this.uiView.id_page5_arch_sub4_cap);
        $('#id_page5_arch_sub5_cap').html(this.uiView.id_page5_arch_sub5_cap);
        $('#id_page5_open_head_cap').text(this.uiView.id_page5_open_head_cap);
        $('#id_page5_open_sub1_cap').html(this.uiView.id_page5_open_sub1_cap);
        $('#id_page5_open_sub2_cap').html(this.uiView.id_page5_open_sub2_cap);
        $('#id_page5_open_sub3_cap').html(this.uiView.id_page5_open_sub3_cap);
        $('#id_page5_open_sub4_cap').html(this.uiView.id_page5_open_sub4_cap);
        $('#id_page5_open_sub5_cap').html(this.uiView.id_page5_open_sub5_cap);

        $('#id_page6_head_cap').text(this.uiView.id_page6_head_cap);
        $('#id_page6_subhead_cap').text(this.uiView.id_page6_subhead_cap);
        $('#id_page6_memo_cap').text(this.uiView.id_page6_memo_cap);
        $('#id_page6_team_memo1_cap').html(this.uiView.id_page6_team_memo1_cap);
        $('#id_page6_team_memo2_cap').html(this.uiView.id_page6_team_memo2_cap);
        $('#id_page6_team_memo3_cap').html(this.uiView.id_page6_team_memo3_cap);
        $('#id_page6_team_memo4_cap').html(this.uiView.id_page6_team_memo4_cap);
        $('#id_page6_team_memo5_cap').html(this.uiView.id_page6_team_memo5_cap);
        $('#id_page6_team_memo6_cap').html(this.uiView.id_page6_team_memo6_cap);
        $('#id_page6_team_memo7_cap').html(this.uiView.id_page6_team_memo7_cap);
        $('#id_page6_team_memo8_cap').html(this.uiView.id_page6_team_memo8_cap);

        //$('#id_page7_head_cap').text(this.uiView.id_page7_head_cap);

        $('#id_foot_subhead_cap').html(this.uiView.id_foot_subhead_cap);
        $('#id_foot_qq_cap').html(this.uiView.id_foot_qq_cap);
        $('#id_foot_email_cap').html(this.uiView.id_foot_email_cap);
    },

    changeLanguageClick : function () {
        if(mLanguage == 'cn') {
            mLanguage = 'en';
        } else {
            mLanguage = 'cn';
        }

        this.initView();
        this.initStrings();
    }
};