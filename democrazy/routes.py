from flask import Blueprint, render_template, flash
from werkzeug.utils import redirect

bp = Blueprint("routes", __name__)

DOES_WELL_KEY = {
    "proportionality": "Proportionality",
    "voterChoice": "Voter Choice",
    "localRep": "Local Representation"
}

SYSTEMS = {
    "first-past-the-post": {
        "name": "First-past-the-post",
        "code": "first-past-the-post",
        "desc": "There is a high possibility that your country is using this one. If so, then your country probably has the big 2 \
            parties that everybody hates but votes for anyway, and those small parties that nobody cares about. Not a great system, \
            is it?",
        "doesWell": {
            "proportionality": 0,
            "voterChoice": 0,
            "localRep": 1
        },
        "playable": True
    },
    "limited-voting": {
        "name": "Limited Voting",
        "code": "limited-voting",
        "desc": "In this system, voters have fewer votes than there are positions available, and those positions are given to the most \
            highly voted candidates. This usually helps smaller parties gain representation.",
        "doesWell": {
            "proportionality": 1,
            "voterChoice": 2,
            "localRep": 2
        },
        "playable": False
    },
}


@bp.route("/")
def index():
    return render_template("index.html")


@bp.route("/explore")
def explore():
    return render_template("explore.html")


@bp.route("/explore/<name>")
def explore_welcome(name):
    if name not in SYSTEMS:
        flash("We have not implemented that system yet!")
        return redirect("/explore")

    return render_template("explore/welcome.html", system=SYSTEMS[name], does_well_key=DOES_WELL_KEY)


@bp.route("/explore/<name>/play")
def explore_play(name):
    if name not in SYSTEMS or SYSTEMS[name]["playable"] is False:
        flash("We have not implemented that system yet!")
        return redirect(f"/explore/{name}")

    return render_template(f"explore/{name}.html")


@bp.route("/explore/<name>/share")
def explore_share(name):
    if name not in SYSTEMS:
        flash("We have not implemented that system yet!")
        return redirect("/explore")

    return render_template("explore/share.html", system=SYSTEMS[name])


@bp.route("/polls")
def polls():
    return render_template("polls.html")
