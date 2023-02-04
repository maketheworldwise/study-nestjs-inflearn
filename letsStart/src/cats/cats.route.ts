import { Request, Response, Router } from "express";
import { Cat, CatType } from "./cats.model";

const router = Router();

//* READ 모든 고양이 데이터 조회
router.get("/cats", (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: cats,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 데이터 조회
router.get("/cats/:id", (req: Request, res: Response) => {
  try {
    const params = req.params;
    const findCat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: findCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 데이터 추가
router.post("/cats", (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* UPDATE 특정 고양이 데이터 업데이트
router.put("/cats/:id", (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;

    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = body;
      }
    });

    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* UPDATE 특정 고양이 일부 데이터 업데이트
router.patch("/cats/:id", (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;

    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = body;
      }
    });

    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* DELETE 특정 고양이 삭제
router.delete("/cats/:id", (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router;
