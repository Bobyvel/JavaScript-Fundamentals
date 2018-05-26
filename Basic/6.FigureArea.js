function figureArea(w, h, W, H) {
    let [area1, area2, area3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    return area1 + area2 - area3;
}

figureArea(2, 4, 5, 3);



