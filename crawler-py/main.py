import requests

# 发送 GET 请求
def send_get_request(url,params):
    try:
        headers = {
          'Content-Type': 'application/json; charset=utf-8'
        }
        response = requests.get(url,params,headers=headers)
        # 确保请求成功
        response.raise_for_status()
        print(f"GET 请求的响应内容: {response.text}")
    except requests.RequestException as e:
        print(f"请求出错: {e}")

# 发送 POST 请求
def send_post_request(url, data):
    try:
        response = requests.post(url, data=data)
        # 确保请求成功
        response.raise_for_status()
        print(f"POST 请求的响应内容: {response.text}")
    except requests.RequestException as e:
        print(f"请求出错: {e}")

# 测试 URL
# test_url = 'http://172.22.71.2:9582/api/mis/safe/meeting/rooms/apply'
test_url = 'https://webapi.qmai.cn/web/catering/crm/coupon/list'

# 发送 GET 请求示例
print("发送 GET 请求...")
# params = {
#   't': '1720605729118',
#   'begindate': '2024-07-10',
#   'enddate': '2024-07-16',
#   'epid': 'tsinglink',
#   'indexs': '1',
#   'language': 'zh_CN'
# }
params = {
  "pageNo": 1,   
  "pageSize": 1000,   
  "useStatus": 0,   
  "appid": "wxd92a2d29f8022f40" 
}
send_get_request(test_url,params)

# 发送 POST 请求示例
# test_post_url = 'https://httpbin.org/post'
# post_data = {'key': 'value'}  # 这是一个字典，将被转换为表单或 JSON
# print("\n发送 POST 请求...")
# send_post_request(test_post_url, post_data)