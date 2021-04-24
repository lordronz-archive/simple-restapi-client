def main():
    import requests
    from pprint import pprint
    response = requests.get('http://localhost:3000/user/getuser/newuser')
    pprint({**response.headers})
    print()
    pprint(response.json())

if __name__ == '__main__':
    main()