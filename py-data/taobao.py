# import requests
# import re
# import json

# url = 'https://h5api.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?jsv=2.6.2&appKey=12574478&t=1697104428715&sign=3fbd5ef31082795a488eda00ade2a2b0&api=mtop.relationrecommend.WirelessRecommend.recommend&v=2.0&type=jsonp&dataType=jsonp&callback=mtopjsonp1&data=%7B%22appId%22%3A%2234385%22%2C%22params%22%3A%22%7B%5C%22device%5C%22%3A%5C%22HMA-AL00%5C%22%2C%5C%22isBeta%5C%22%3A%5C%22false%5C%22%2C%5C%22grayHair%5C%22%3A%5C%22false%5C%22%2C%5C%22from%5C%22%3A%5C%22nt_history%5C%22%2C%5C%22brand%5C%22%3A%5C%22HUAWEI%5C%22%2C%5C%22info%5C%22%3A%5C%22wifi%5C%22%2C%5C%22index%5C%22%3A%5C%224%5C%22%2C%5C%22rainbow%5C%22%3A%5C%22%5C%22%2C%5C%22schemaType%5C%22%3A%5C%22auction%5C%22%2C%5C%22elderHome%5C%22%3A%5C%22false%5C%22%2C%5C%22isEnterSrpSearch%5C%22%3A%5C%22true%5C%22%2C%5C%22newSearch%5C%22%3A%5C%22false%5C%22%2C%5C%22network%5C%22%3A%5C%22wifi%5C%22%2C%5C%22subtype%5C%22%3A%5C%22%5C%22%2C%5C%22hasPreposeFilter%5C%22%3A%5C%22false%5C%22%2C%5C%22prepositionVersion%5C%22%3A%5C%22v2%5C%22%2C%5C%22client_os%5C%22%3A%5C%22Android%5C%22%2C%5C%22gpsEnabled%5C%22%3A%5C%22false%5C%22%2C%5C%22searchDoorFrom%5C%22%3A%5C%22srp%5C%22%2C%5C%22debug_rerankNewOpenCard%5C%22%3A%5C%22false%5C%22%2C%5C%22homePageVersion%5C%22%3A%5C%22v7%5C%22%2C%5C%22searchElderHomeOpen%5C%22%3A%5C%22false%5C%22%2C%5C%22search_action%5C%22%3A%5C%22initiative%5C%22%2C%5C%22sugg%5C%22%3A%5C%22_4_1%5C%22%2C%5C%22sversion%5C%22%3A%5C%2213.6%5C%22%2C%5C%22style%5C%22%3A%5C%22list%5C%22%2C%5C%22ttid%5C%22%3A%5C%22600000%40taobao_pc_10.7.0%5C%22%2C%5C%22needTabs%5C%22%3A%5C%22true%5C%22%2C%5C%22areaCode%5C%22%3A%5C%22CN%5C%22%2C%5C%22vm%5C%22%3A%5C%22nw%5C%22%2C%5C%22countryNum%5C%22%3A%5C%22156%5C%22%2C%5C%22m%5C%22%3A%5C%22pc%5C%22%2C%5C%22page%5C%22%3A1%2C%5C%22n%5C%22%3A48%2C%5C%22q%5C%22%3A%5C%22%25E7%25BD%2591%25E7%2590%2583%25E6%258B%258D%5C%22%2C%5C%22tab%5C%22%3A%5C%22all%5C%22%2C%5C%22pageSize%5C%22%3A48%2C%5C%22totalPage%5C%22%3A100%2C%5C%22totalResults%5C%22%3A4800%2C%5C%22sourceS%5C%22%3A%5C%220%5C%22%2C%5C%22sort%5C%22%3A%5C%22_coefp%5C%22%2C%5C%22bcoffset%5C%22%3A%5C%22%5C%22%2C%5C%22ntoffset%5C%22%3A%5C%22%5C%22%2C%5C%22filterTag%5C%22%3A%5C%22%5C%22%2C%5C%22service%5C%22%3A%5C%22%5C%22%2C%5C%22prop%5C%22%3A%5C%22%5C%22%2C%5C%22loc%5C%22%3A%5C%22%5C%22%2C%5C%22start_price%5C%22%3Anull%2C%5C%22end_price%5C%22%3Anull%2C%5C%22startPrice%5C%22%3Anull%2C%5C%22endPrice%5C%22%3Anull%2C%5C%22itemIds%5C%22%3Anull%2C%5C%22p4pIds%5C%22%3Anull%7D%22%7D'

# headers = {
#     'cookie': 'cna=ArCuHRXRHmsBASABDagAkA35; _m_h5_tk=459c85d40ca0f16f6fbad1b66208862f_1697114826899; _m_h5_tk_enc=06360698b066bd5ca6aba7e961cbf53a; cookie2=1e10003a27cc8e0ba0538a69b77e11b8; t=22a2e5097a4ee48c2171a0cd86c4071c; _tb_token_=ef05a31e8eb1e; _samesite_flag_=true; xlly_s=1; sgcookie=E100rdwUIMVNI8ZPuv3YucE%2BrmCEjLbm9Fbqm7b84LF2Yw9pDn2uLRf%2BbOCTGoFqbA29GCT6FeRcjj%2BBqzhNExQhiGdLPaTgGQfbmVLxbFU4rgRzvxDz4XyHMwdvAKZIUTu6; unb=2445132828; uc3=id2=UUwU3KZJ4TDUMw%3D%3D&vt3=F8dCsGrO0TwN65jo2Ts%3D&nk2=saCvuiTzACMJrqHWuBu%2B57a0aQ%3D%3D&lg2=URm48syIIVrSKA%3D%3D; csg=7f7edea8; lgc=%5Cu4E00%5Cu4E8C%5Cu4E09%5Cu56DB%5Cu4E94572588831; cancelledSubSites=empty; cookie17=UUwU3KZJ4TDUMw%3D%3D; dnk=%5Cu4E00%5Cu4E8C%5Cu4E09%5Cu56DB%5Cu4E94572588831; skt=8bdda1a608b99aae; existShop=MTY5NzEwNDQwNg%3D%3D; uc4=id4=0%40U27L8fky%2BzD4BMbFLYum6YDw2hi8&nk4=0%40s8XvX72iCbiEtA3f9eORJfpZ9rNgO8L2Kax8YzvT; tracknick=%5Cu4E00%5Cu4E8C%5Cu4E09%5Cu56DB%5Cu4E94572588831; _cc_=Vq8l%2BKCLiw%3D%3D; _l_g_=Ug%3D%3D; sg=183; _nk_=%5Cu4E00%5Cu4E8C%5Cu4E09%5Cu56DB%5Cu4E94572588831; cookie1=BxoH5Vfr5uSYdr7Yk4uoNLOnDbvltLNxzcP9wm7mZI4%3D; mt=ci=4_1; thw=cn; uc1=cookie21=UtASsssmeW6lpyd%2BB%2B3t&existShop=false&cookie16=URm48syIJ1yk0MX2J7mAAEhTuw%3D%3D&pas=0&cookie14=Uoe9agRuKVSjZQ%3D%3D&cookie15=Vq8l%2BKCLz3%2F65A%3D%3D; l=fBPvBWZePaDf2pV0BO5Blurza779gIdbzSFzaNbMiIEGa6MhaU9zlNCtq3sXudtjgTfAIUxrtWFbsdHk5P4LRIkDBeYBRs5mpDv9-bddI65..; tfstk=dILe3m0-u23EAtk1AM7P7eA--FQd-ZHj8U65ZQAlO9XhdQflzdvS99OopL8PIQKI9gMLaWLw3zaIpDduza_ohxgjlBhdyaDblITf9U_5vAG_CqOp9aFeZn1ElzyazOj_tdPrwqSbNQ6MJpbRln0doOzuuSCRxvOLVzaWl6SFxIXwD8CiMNYJY8qPx1CNhflwumffD; isg=BJKSSEaTIwo6O192TloByI9y41h0o5Y9uuSkSVzrvsUxbzJpRDPmTZiJ38vTRw7V',
#     'referer': 'https://s.taobao.com/',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
# }

# response = requests.get(url=url,headers=headers)
# res = response.text
# # json_str = re.findall(r'(?<=\().*(?=\))',res)[0]
# # json_obj = json.loads(json_str)
# print(res)

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time
import csv
import random

# 反检测设置 
edge_options = Options()
edge_options.add_experimental_option('excludeSwitches', ['enable-automation'])    # 开启开发者模式(顶部)
edge_options.add_argument('--disable-blink-features=AutomationControlled')        # 禁用启用Blink运行时的功能


driver = webdriver.Chrome(options=edge_options)
driver.get("https://login.taobao.com/member/login.jhtml?spm=a21bo.jianhua.754894437.1.5af92a890mPsee&f=top&redirectURL=https%3A%2F%2Fwww.taobao.com%2F")
driver.maximize_window()


driver.find_element(By.CSS_SELECTOR, '#fm-login-id').send_keys(13991435658)
driver.find_element(By.CSS_SELECTOR, '#fm-login-password').send_keys('rgq572588831')
time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '#login-form > div.fm-btn > button').click()

time.sleep(2)
driver.find_element(By.CSS_SELECTOR,'#q').send_keys('宿舍神器')
driver.find_element(By.CSS_SELECTOR,'#J_TSearchForm > div.search-button > button').click()

time.sleep(1)
for i in range(10):
    items = driver.find_elements(By.CSS_SELECTOR,'.Card--doubleCard--wznk5U4')
    for item in items:
        try:
            title = item.find_element(By.CSS_SELECTOR,'.Title--title--jCOPvpf span').text
            imgUrl = item.find_element(By.CSS_SELECTOR,'.MainPic--mainPicWrapper--iv9Yv90 img').get_attribute('src')
            price = round(random.uniform(30,200),2)
            address = random.randint(0,1)
            # ['7成新','8成新','85新','88新','9成新','95新','99新','全新']
            times = random.randint(1690838541813,1699346492711)
            new = random.randint(0,7)
            categary = 5
            userId = random.randint(99,118)
            remark = random.sample(['正品保障，未使用过，质量很好','物超所值，价格可以降低','仅此一件快买吧买吧！','上次买到这么好的东西还是在上次！'],1)[0]
            with open('taobao.csv',mode='a',newline='',encoding='utf-8') as f:
                writer = csv.writer(f)
                writer.writerow([title,imgUrl,price,new,address,categary,userId,remark,times])
            print(title,imgUrl)
        except:
            pass
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR,'.next-btn.next-medium.next-btn-normal.next-pagination-item.next-next').click()
    time.sleep(2)
    


# # 绕过selenium检测 滑块部分
# driver.execute_cdp_cmd(
#     "Page.addScriptToEvaluateOnNewDocument",
#     {
#         "source": """Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"""
#     }
# )