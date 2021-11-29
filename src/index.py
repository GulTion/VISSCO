import os
import webview

from pynput.mouse import Controller

mice = Controller()
# $ git config --global user.name "John Doe"
# $ git config --global user.email johndoe@example.com


class Api:
    def handleMouse(self, data):
        if(data["type"] == "move"):
            mice.position = (data["data"]["x"], data["data"]["y"])
            # cdodnsfn f

            # mouse.position = (data["data"]["x"], data["data"]["y"])


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
    window = webview.create_window('VISSCO', entry, js_api=Api())
    webview.start(update_ticker, debug=True)
