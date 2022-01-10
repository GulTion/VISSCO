import os

import webview

from pynput.mouse import Controller as MC
from pynput.keyboard import Controller as KC
from pynput.keyboard import Key
from pynput.mouse import Button

mice = MC()
kbd = KC()


def map(js):
    return mapper[js]


class Api:
    def handleMouse(self, data):
        print(data)
        if(data["data"] == "MOVE"):
            # if()
            mice.position = (data["info"]["x"], data["info"]["y"])

    def handleMouse(self, pac):
        print(pac)
        if(pac["data"] == "MOVE"):
            # print("move")
            mice.position = (pac["info"]["x"], pac["info"]["y"])
        elif(pac["data"] == "CLICK"):
            # print("click")
            if(pac["key"] == "LEFT"):
                mice.click(Button.left, 1)

                # print("left click")
            elif(pac["key"] == "RIGHT"):
                mice.click(Button.right, 1)

                # print("right click")

    def handleKeyboard(self, data):
        # data = {
        #     key: {key: "D", has: 0/1  # data["key"]["has"]
        #           },
        #     type: "KEYBOARD",
        #     data: "DOWN/UP"  # data["data"]
        # }
        print(data)
        key = data["key"]["key"]
        if(data["data"] == "DOWN"):
            if(data["key"]["has"] == 0):
                kbd.press(key)
                # print("KEy 0 type down")
            elif(data["key"]["has"] == 1):
                kbd.press(Key[key])
                # print("KEy 1 type down")

        elif(data["data"] == "UP"):
            if(data["key"]["has"] == 0):
                kbd.release(key)

                # print("KEy 0 type up")
            elif(data["key"]["has"] == 1):
                kbd.release(Key[key])
                # print("KEy 1 type up")


def get_entrypoint():
    def exists(path):
        return os.path.exists(os.path.join(os.path.dirname(__file__), path))

    if exists('../gui/index.html'):  # unfrozen development
        return '../gui/index.html'

    if exists('../Resources/gui/index.html'):  # frozen py2app
        return '../Resources/gui/index.html'

    if exists('./gui/index.html'):
        return './gui/index.html'

    raise Exception('No index.html found')


entry = get_entrypoint()

# @set_interval(1)


def update_ticker():
    if len(webview.windows) > 0:
        webview.windows[0].evaluate_js("let a = 3")


# {type:"mouse|keyboard|move", data:{
#   key:
# } }

if __name__ == '__main__':
    window = webview.create_window(
        'VISSCO', entry, js_api=Api())
    webview.start(update_ticker, debug=True)
